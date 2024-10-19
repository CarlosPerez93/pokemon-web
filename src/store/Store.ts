import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../services/Theme/theme.slice'

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
    },
})

export default store
