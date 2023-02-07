import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface NavState {
  origin: number
  destination: number
  travelTimeInformation: number
}

const initialState: NavState = {
  origin: 0,
  destination: 0,
  travelTimeInformation: 0,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<number>) => {
      state.origin = action.payload
    },
    setDestination: (state, action: PayloadAction<number>) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action: PayloadAction<number>) => {
      state.travelTimeInformation = action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions
export const selectNav = (state: RootState) => state.nav
export default navSlice.reducer
