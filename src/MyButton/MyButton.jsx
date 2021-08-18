import React from 'react'

import c from './button.module.scss'

function MyButton({children, ...props}) {
        return (
                <div className={c.main}>
                        <button {...props}>{children}</button>
                </div>
        )
}

export default MyButton
