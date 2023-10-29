import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {getStageInfo, getTask, getTasks} from 'src/shared/api/ApiCalls.ts';
import {BackendError} from 'src/app/types/global.ts';
import {getErrorMessage} from 'src/shared/utils/api';
import {FullTask, STAGES, TasksStages} from 'src/entities/Task/taskModel.ts';

export const getTasksThunk = createAsyncThunk<
    TasksStages,
    void,
    {rejectValue: string}
>('user/getTasksThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            tasksMaps: TasksStages;
        }> = await getTasks();

        return res.data.tasksMaps;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const getStageInfoThunk = createAsyncThunk<
    {
        endDate: string;
        stage: STAGES;
    },
    void,
    {rejectValue: string}
>('user/getStageInfoThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            currentStage: {
                endDate: string;
                stage: STAGES;
            };
        }> = await getStageInfo();

        return res.data.currentStage;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const getTaskByIdThunk = createAsyncThunk<
    FullTask,
    number,
    {rejectValue: string}
>('user/getTaskByIdThunk', async (id, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<FullTask> = await getTask(id);

        return res.data;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
