import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import MyButton from '../MyButton/MyButton'
import ServisWorker from '../servicWorker/ServisWorker'
import useFetching from '../userHooks/useFetching'



function PageById() {
       const params=useParams()
       const history=useHistory()

       const [info,setInfo]=React.useState({})
       const [comments,setComments]=React.useState([])
  
      const [fetching,isLoaded]=useFetching(async()=>{
              const response=await ServisWorker().getPageById(params.id)
              setInfo(response)
      })
 
      const [fetchingCom]=useFetching(async()=>{
        const response=await ServisWorker().getUsersCommnet(params.id)
        setComments(response)
})
      React.useEffect(()=>{
        fetching()
         fetchingCom()
      },[])
       
     
       
 

        return (
                <div style={{padding:'20px'}}>
                        <h1><MyButton onClick={()=>history.push('/posts')}>Вернутся к постам</MyButton></h1>
                        
                <div>
                        {
                                isLoaded&&<Loader/>
                        }
                        <h1>{info.id}. {info.title} </h1>
                        <h3>{info.body} </h3>



                </div>
                <div>
                        <h1>COMMENTS</h1>
                        {
                                comments.map(element=>{
                         return  <div style={{border:"2px solid red",padding:"2px"}}><h1>{element.id}. {element.name} </h1>
                                       <h3>body:{element.body}</h3>
                                       <h3>email:{element.email}</h3>
                                      </div>
                                })
                        }
                </div>
                </div>
        )
}

export default PageById
