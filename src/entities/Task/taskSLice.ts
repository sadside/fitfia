import {
    CLIENT_STAGES,
    FullTask,
    STAGES,
    TasksStages,
} from 'src/entities/Task/taskModel.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    getStageInfoThunk,
    getTaskByIdThunk,
    getTasksThunk,
} from 'src/entities/Task/taskThunks.ts';
import {toast} from 'react-toastify';

type initialState = {
    tasksMaps: TasksStages;
    currentStage: STAGES;
    menuCurrentStage: CLIENT_STAGES;
    status: string;
    stageEndDate: string;
    fullTask: FullTask | null;
};

const initialState: initialState = {
    tasksMaps: {
        [STAGES.ZERO]: [],
        [STAGES.ONE]: [],
        [STAGES.TWO]: [],
    },
    currentStage: STAGES.ZERO,
    menuCurrentStage: CLIENT_STAGES.ZERO,
    status: 'idle',
    stageEndDate: '',
    fullTask: null,
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
            state.status = 'idle';
        });
        builder.addCase(getTasksThunk.pending, state => {
            state.status = 'loading';
        });
        builder.addCase(getTasksThunk.rejected, (state, action) => {
            toast.error(action.payload);
            state.status = 'error with all tasks';
        });
        builder.addCase(getStageInfoThunk.fulfilled, (state, action) => {
            state.currentStage = action.payload.stage;
            state.stageEndDate = action.payload.endDate;
        });
        builder.addCase(getStageInfoThunk.rejected, (state, action) => {
            toast.error(action.payload);
            state.status = 'error with all tasks';
        });
        builder.addCase(getTaskByIdThunk.pending, state => {
            state.status = 'loading full task';
        });
        builder.addCase(getTaskByIdThunk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.fullTask = action.payload;
        });
        builder.addCase(getTaskByIdThunk.rejected, (state, action) => {
            toast.error(action.payload);
            state.status = 'error with full tasks';
        });
    },
});

export const {setCurrentMenuStage} = tasksSlice.actions;
export default tasksSlice.reducer;
