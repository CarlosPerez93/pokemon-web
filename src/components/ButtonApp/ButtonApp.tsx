import { ComponentProps } from 'react'

import './ButtonApp.css'

type PropsBtn = ComponentProps<'button'>

export const ButtonApp = ({ children, onClick, style }: PropsBtn) => {
    return (
        <button onClick={onClick} style={style} className='button-app'>
            {children}
        </button>
    )
}
