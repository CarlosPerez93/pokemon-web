import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    currentTheme: 'light',
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
        },
    },
})

export const { toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
