import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from '../views/Public/SignIn/SignIn'
import { SignUp } from '../views/Public/SignUp/SignUp'

export const PublicRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-in' element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default PublicRoutes
