import React from 'react'
import { useHistory } from 'react-router-dom'

import MyButton from '../MyButton/MyButton'
import c from './posts.module.scss'

function PostsList({id,title,body,removePost}) {
       const history= useHistory()

        const deletePost=()=>{
                removePost(id)
        }
        return (
                <div className={c.main} >
                        <div>
                        <div><h1>{id} {title}</h1> </div>
                        <div><h4> {body}</h4> </div>
                        </div>
                        <div className={c.main_show_remove_block}>
                                <MyButton onClick={()=>{history.push(`/posts/${id}`)}}>Открыть</MyButton> 

                                <MyButton onClick={deletePost}>Удалить</MyButton> 
                        </div>
                        
                </div>
        )
}

export default PostsList
