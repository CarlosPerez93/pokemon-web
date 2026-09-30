import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

import Home from '@views/Home'
import NavBar from '@components/NavBar'
import ListPokemon from '@views/ListPokemon'
import Dossier from '@views/Dossier'
import { Error404 } from '@components/Error404'

import { ROUTES_PUBLIC as RP } from '@utils/constants/routes.constants'

export const PublicRoutes = () => {
    return (
        <Router>
            <NavBar>
                <Routes>
                    <Route path={RP.home} element={<Home />} />
                    <Route path={RP.listPokemon} element={<ListPokemon />} />
                    <Route path={RP.dossier} element={<Dossier />} />
                    <Route path={RP.error404} element={<Error404 />} />

                    <Route
                        path={RP.error404}
                        element={<Navigate replace to={RP.error404} />}
                    />
                </Routes>
            </NavBar>
        </Router>
    )
}

export default PublicRoutes
