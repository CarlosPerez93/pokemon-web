import { ComponentProps } from 'react'

import './ButtonApp.css'
import { Button } from 'antd'

type PropsBtn = ComponentProps<'button'>

export const ButtonApp = ({ children, onClick, style }: PropsBtn) => {
    return (
        <Button onClick={onClick} style={style} className='button-app'>
            {children}
        </Button>
    )
}
