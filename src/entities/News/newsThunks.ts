import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {getNews, getTask} from 'src/shared/api/ApiCalls.ts';
import {BackendError} from 'src/app/types/global.ts';
import {getErrorMessage} from 'src/shared/utils/api';
import {New} from 'src/entities/News/newsModel.ts';

export const getNewsThunk = createAsyncThunk<
    New[],
    void,
    {rejectValue: string}
>('user/getNewsThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            content: New[];
        }> = await getNews();

        return res.data.content;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const getNewByIdThunk = createAsyncThunk<
    New,
    number,
    {rejectValue: string}
>('user/getNewByIdThunk', async (id, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{
            content: {
                details: New;
                text: string;
            };
        }> = await getTask(id);

        return res.data.content.details;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
