import { Link } from 'react-router-dom'

import { ButtonApp } from '@components/ButtonApp'

import { ROUTES_PUBLIC as RP } from '@utils/constants/routes.constants'

import './Error404.css'

export const Error404 = () => {
    return (
        <main className='error-404' aria-labelledby='error-title'>
            <div className='error-404__scene'>
                <span
                    className='error-404__pokemon error-404__pokemon--left'
                    aria-hidden='true'
                />
                <span
                    className='error-404__pokemon error-404__pokemon--charmander'
                    aria-hidden='true'
                />
                <h1 id='error-title' className='error-404__number'>
                    404
                </h1>

                <span className='error-404__label'>ERROR</span>
                <ButtonApp className='error-404__button'>
                    <Link to={RP.home}>Home</Link>
                </ButtonApp>
            </div>
        </main>
    )
}

export default Error404
