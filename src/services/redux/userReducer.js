import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser : null
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const { userAdded } = userSlice.actions

export default userSlice.reducer