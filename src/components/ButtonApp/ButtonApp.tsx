import { Button } from 'antd'

import { PropsBtn } from './Button.type'

import './ButtonApp.css'

export const ButtonApp = ({ className, children, onClick }: PropsBtn) => {
    const styles = className ? className : 'button-app'
    return (
        <Button onClick={onClick} className={styles}>
            {children}
        </Button>
    )
}
