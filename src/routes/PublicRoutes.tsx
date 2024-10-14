import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'
import Home from '../views/Home'
import NavBar from '../components/NavBar'
import Pokemons from '../views/Pokemons'

export const PublicRoutes = () => {
    return (
        <Router>
            <NavBar>
                <Routes>
                    <Route path={RP.home} element={<Home />} />
                    <Route path={RP.pokemons} element={<Pokemons />} />
                    <Route
                        path={RP.default}
                        element={<Navigate replace to={RP.error404} />}
                    />
                </Routes>
            </NavBar>
        </Router>
    )
}

export default PublicRoutes
