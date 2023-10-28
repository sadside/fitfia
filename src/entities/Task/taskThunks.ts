import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {getTasks} from 'src/shared/api/ApiCalls.ts';
import {BackendError} from 'src/app/types/global.ts';
import {getErrorMessage} from 'src/shared/utils/api';
import {Task} from 'src/entities/Task/taskModel.ts';

export const getTasksThunk = createAsyncThunk<
    {
        zero: Task[];
        one: Task[];
        two: Task[];
    },
    void,
    {rejectValue: string}
>('user/getTasksThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            tasksMaps: {
                zero: Task[];
                one: Task[];
                two: Task[];
            };
        }> = await getTasks();

        console.log(res.data);

        return res.data.tasksMaps;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
