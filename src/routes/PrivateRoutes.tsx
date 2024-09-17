import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from '../views/Private/ListPokemons/Home'

import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'
import { Error404 } from '../views/Error404'

export const PrivateRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={RP.home} element={<Home />} />
                <Route path={RP.error404} element={<Error404 />} />
                <Route
                    path={RP.default}
                    element={<Navigate replace to={RP.error404} />}
                />
            </Routes>
        </Router>
    )
}

export default PrivateRoutes
