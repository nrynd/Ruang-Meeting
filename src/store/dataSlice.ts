import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
    id: number;
    name: string;
    description?: string;
}

interface DataState {
    items: Item[];
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    items: [],
    loading: false,
    error: null,
};

// ✅ async thunk untuk ambil data dari API
export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://uat-api.ftlgym.com/api/v1/test/jadwalruangan');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Gagal memuat data');
        }
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default dataSlice.reducer;
