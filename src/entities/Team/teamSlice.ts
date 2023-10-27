import {Team} from 'src/entities/Team/teamModel.ts';
import {createSlice} from '@reduxjs/toolkit';
import {getTeamInfoThunk} from 'src/entities/Team/teamThunks.ts';
import {toast} from 'react-toastify';

type initialState = {
    teamInfo: Team | null;
};

const initialState: initialState = {
    teamInfo: null,
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTeamInfoThunk.fulfilled, (state, action) => {
            state.teamInfo = action.payload;
        });
        builder.addCase(getTeamInfoThunk.rejected, (_, action) => {
            toast.error(action.payload);
        });
    },
});

export default teamSlice.reducer;
