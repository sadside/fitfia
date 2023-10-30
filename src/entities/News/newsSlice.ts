import {New} from 'src/entities/News/newsModel.ts';
import {createSlice} from '@reduxjs/toolkit';
import {getNewByIdThunk, getNewsThunk} from 'src/entities/News/newsThunks.ts';
import {toast} from 'react-toastify';

type initialState = {
    news: New[];
    currentNew: New | null;
};

const initialState: initialState = {
    news: [],
    currentNew: null,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getNewsThunk.fulfilled, (state, action) => {
            state.news = action.payload;
        });
        builder.addCase(getNewsThunk.rejected, (_, action) => {
            toast.error(action.payload);
        });
        builder.addCase(getNewByIdThunk.fulfilled, (state, action) => {
            state.currentNew = action.payload;
        });
        builder.addCase(getNewByIdThunk.rejected, (_, action) => {
            toast.error(action.payload);
        });
    },
});

export default newsSlice.reducer;
