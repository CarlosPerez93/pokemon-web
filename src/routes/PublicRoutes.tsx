import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'
import Home from '../views/Home'
import NavBar from '../components/NavBar'
import ListPokemon from '../views/ListPokemon'

export const PublicRoutes = () => {
    return (
        <Router>
            <NavBar>
                <Routes>
                    <Route path={RP.home} element={<Home />} />
                    <Route path={RP.listPokemon} element={<ListPokemon />} />
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
