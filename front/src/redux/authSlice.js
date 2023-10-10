import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: state => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;