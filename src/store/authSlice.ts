import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const loginAsync = createAsyncThunk(
    'auth/loginAsync',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://uat-api.ftlgym.com/api/v1/test/login', credentials);

            if (response.data.status === 'success') {
                return response.data;
            } else {
                return rejectWithValue('Login gagal, periksa email/password.');
            }
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Terjadi kesalahan server');
        }
    }
);

// email : yosi@gmail.com
// password : password


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = true;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
