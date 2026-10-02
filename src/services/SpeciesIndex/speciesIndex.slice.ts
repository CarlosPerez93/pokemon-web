import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
    totalSpecies: null as number | null,
}

export const SpeciesIndexSlice = createSlice({
    name: 'speciesIndex',
    initialState,
    reducers: {
        setTotalSpecies: (state, action: PayloadAction<number>) => {
            state.totalSpecies = action.payload
        },
    },
})

export const { setTotalSpecies } = SpeciesIndexSlice.actions
export default SpeciesIndexSlice.reducer
