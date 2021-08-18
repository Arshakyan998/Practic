import React from 'react'

function Selected({options,defaultValue,value,setValue}) {

        
       const chnageValue=(e)=>{
        setValue(prev=>({...prev,sort:e.target.value}));
       }
        return (
                <div>
                        
                        <select value={value.sort} onChange={chnageValue}>
                 <option disabled>{defaultValue}</option>
                 <option value="">Не сортировать</option>

                      {
                              options.map(element=>{
         return <option key={element.value} value={element.value}>{element.text}</option>
                              })
                      }

                        </select>
                </div>
        )
}

export default Selected
