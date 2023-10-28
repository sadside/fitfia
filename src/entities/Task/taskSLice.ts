import {Task} from 'src/entities/Task/taskModel.ts';
import {createSlice} from '@reduxjs/toolkit';
import {getTasksThunk} from 'src/entities/Task/taskThunks.ts';
import {toast} from 'react-toastify';

type initialState = {
    tasksMaps: {
        zero: Task[];
        one: Task[];
        two: Task[];
    };
};

const initialState: initialState = {
    tasksMaps: {
        zero: [],
        one: [],
        two: [],
    },
};

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTasksThunk.fulfilled, (state, action) => {
            state.tasksMaps = action.payload;
        });
        builder.addCase(getTasksThunk.rejected, (_, action) => {
            toast.error(action.payload);
        });
    },
});

export default tasksSlice.reducer;
