import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

import { SignUp } from '../views/Public/SignUp/SignUp'
import { SignIn } from '../views/Public/SignIn/SignIn'
import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'
import Home from '../views/Home'

export const PublicRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={RP.home} element={<Home />} />
                <Route path={RP.signIn} element={<SignIn />} />
                <Route path={RP.signUp} element={<SignUp />} />
                <Route
                    path={RP.default}
                    element={<Navigate replace to={RP.error404} />}
                />
            </Routes>
        </Router>
    )
}

export default PublicRoutes
