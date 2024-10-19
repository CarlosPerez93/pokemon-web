import { createRoot } from 'react-dom/client'

import App from './views/App.tsx'

import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'

import 'antd/dist/reset.css'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
