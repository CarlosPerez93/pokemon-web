import { I18nextProvider } from 'react-i18next'

import { PrivateRoutes, PublicRoutes } from '../routes'

import i18n from '../i18n/config'
import useData from '../hooks/useData'
import { AUTH } from '../utils/constants/redux.constants'

function App() {
    const { authentication } = useData({ reducer: AUTH })
    return (
        <I18nextProvider i18n={i18n}>
            {authentication ? <PrivateRoutes /> : <PublicRoutes />}
        </I18nextProvider>
    )
}

export default App
