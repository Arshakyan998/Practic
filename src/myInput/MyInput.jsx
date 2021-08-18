import React from 'react'
import c from './myInput.module.scss'

function MyInput({...props}) {
        return (
                <div className={c.main}>
                        <input {...props} />
                </div>
        )
}

export default MyInput
