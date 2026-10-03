import { Button } from 'antd'

import { ButtonAppProps } from './ButtonApp.type'

import './ButtonApp.css'

export const ButtonApp = ({ className, children, onClick }: ButtonAppProps) => {
    const styles = className ? className : 'button-app'
    return (
        <Button onClick={onClick} className={styles}>
            {children}
        </Button>
    )
}

export default ButtonApp
