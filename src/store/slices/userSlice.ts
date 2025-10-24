import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  email: string
  name: string
  image: string
  age: number
  phone: string
  gender: string
  career: string
}

export interface UserState {
  user: User 
  isAuthenticated: boolean
  isLoading: boolean
}

const initialState: UserState = {
  user: {
    email: '',
    name: '',
    image: '',
    age: 0,
    phone: '',    
    gender: '',
    career: '',
  },
  isAuthenticated: false,
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
    },
    clearUser: (state) => {
  state.user = {
    email: '',
    name: '',
    image: '',
    age: 0,
    phone: '',    
    gender: '',
    career: '',
  }
      state.isAuthenticated = false
      state.isLoading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setUser, clearUser, setLoading } = userSlice.actions

export default userSlice.reducer

// Selectors
export const selectUser = (state: { user: UserState }) => state.user.user
export const selectIsAuthenticated = (state: { user: UserState }) => state.user.isAuthenticated
export const selectUserLoading = (state: { user: UserState }) => state.user.isLoading