import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {getTasks} from 'src/shared/api/ApiCalls.ts';
import {BackendError} from 'src/app/types/global.ts';
import {getErrorMessage} from 'src/shared/utils/api';
import {TasksStages} from 'src/entities/Task/taskModel.ts';

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
