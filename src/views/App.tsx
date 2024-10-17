import { I18nextProvider } from 'react-i18next'

import { PublicRoutes } from '../routes'

import i18n from '../i18n/config'
function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <PublicRoutes />
        </I18nextProvider>
    )
}

export default App
