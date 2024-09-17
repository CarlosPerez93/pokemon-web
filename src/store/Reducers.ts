import { combineReducers, UnknownAction } from '@reduxjs/toolkit'

import { AUTH } from '../utils/constants/redux.constants'

import authReducer, {
    initialState as initialStateAuth,
} from '../services/Auth/auth.slice'

const appReducer = combineReducers({ [AUTH]: authReducer })

const rootReducer = (state: any, action: UnknownAction) => {
    if (action.type === 'auth/logout') state = { [AUTH]: initialStateAuth }

    return appReducer(state, action)
}

export type RootState = ReturnType<typeof appReducer>

export default rootReducer
