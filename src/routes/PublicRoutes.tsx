import { lazy, Suspense } from 'react'
import { Skeleton } from 'antd'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

import NavBar from '@components/NavBar'
import { Error404 } from '@components/Error404'

import { ROUTES_PUBLIC as RP } from '@utils/constants/routes.constants'

import './PublicRoutes.css'

const Home = lazy(() => import('@views/Home'))
const ListPokemon = lazy(() => import('@views/ListPokemon'))
const Favorites = lazy(() => import('@views/Favorites'))
const Dossier = lazy(() => import('@views/Dossier'))

export const PublicRoutes = () => {
    return (
        <Router>
            <NavBar>
                <Suspense
                    fallback={
                        <main
                            className='route-loading page-container'
                            role='status'
                            aria-busy='true'
                            aria-label='Loading field records'
                        >
                            <Skeleton active paragraph={{ rows: 10 }} />
                        </main>
                    }
                >
                    <Routes>
                        <Route path={RP.home} element={<Home />} />
                        <Route path={RP.listPokemon} element={<ListPokemon />} />
                        <Route path={RP.favorites} element={<Favorites />} />
                        <Route path={RP.dossier} element={<Dossier />} />
                        <Route path={RP.error404} element={<Error404 />} />

                        <Route
                            path={RP.error404}
                            element={<Navigate replace to={RP.error404} />}
                        />
                    </Routes>
                </Suspense>
            </NavBar>
        </Router>
    )
}

export default PublicRoutes
