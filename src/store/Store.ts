import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '@services/Theme/theme.slice'
import SpeciesIndexReducer from '@services/SpeciesIndex/speciesIndex.slice'

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        speciesIndex: SpeciesIndexReducer,
    },
})

export default store
