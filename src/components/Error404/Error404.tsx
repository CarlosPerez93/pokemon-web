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
            </div>
        </main>
    )
}

export default Error404
