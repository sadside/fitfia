import {
    CLIENT_STAGES,
    STAGES,
    TasksStages,
} from 'src/entities/Task/taskModel.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTasksThunk} from 'src/entities/Task/taskThunks.ts';
import {toast} from 'react-toastify';

type initialState = {
    tasksMaps: TasksStages;
    currentStage: STAGES;
    menuCurrentStage: CLIENT_STAGES;
};

const initialState: initialState = {
    tasksMaps: {
        [STAGES.ZERO]: [],
        [STAGES.ONE]: [],
        [STAGES.TWO]: [],
    },
    currentStage: STAGES.ONE,
    menuCurrentStage: CLIENT_STAGES.ZERO,
};

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        setCurrentMenuStage: (state, action: PayloadAction<CLIENT_STAGES>) => {
            state.menuCurrentStage = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(getTasksThunk.fulfilled, (state, action) => {
            state.tasksMaps = action.payload;
        });
        builder.addCase(getTasksThunk.rejected, (_, action) => {
            toast.error(action.payload);
        });
    },
});

export const {setCurrentMenuStage} = tasksSlice.actions;
export default tasksSlice.reducer;
