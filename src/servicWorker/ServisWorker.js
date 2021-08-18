import React from 'react'
import axios from 'axios'

import key from "./API"

function ServisWorker() {
        return {
            getData:async(page,limit)=>{
                const response=await axios.get(`${key}?_page=${page}&_limit=${limit}`)
                const data= await response
                return data
            },
        
            getPageById:async(id)=>{ 
                    const response=await axios.get(`${key}/${id}`)
                return response.data
            },
            getUsersCommnet:async(id)=>{
                const response=await axios.get(`${key}/${id}/comments`)
                return response.data
            },
            postNewUser:async(val)=>{
                const response=await fetch(`${key}`,{
                    method: 'POST',
                     headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                    body: JSON.stringify(val),
                     
                })

                return response
            }
        }
}

export default ServisWorker
