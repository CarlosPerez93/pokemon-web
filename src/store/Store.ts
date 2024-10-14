import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'

import rootSaga from './Sagas'
import appReducer from './Reducers'
import { IS_DEV } from '../utils/constants/environment.constant'

const sagaMiddleware = createSagaMiddleware()

const middleware: Array<SagaMiddleware | typeof logger> = IS_DEV
    ? [sagaMiddleware, logger]
    : [sagaMiddleware]

const Store = configureStore({
    reducer: appReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
})

export default Store

sagaMiddleware.run(rootSaga)
