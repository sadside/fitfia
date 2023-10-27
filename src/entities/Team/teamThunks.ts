import {createAsyncThunk} from '@reduxjs/toolkit';
import {Team} from 'src/entities/Team/teamModel.ts';
import {getTeamInfo} from 'src/shared/api/ApiCalls.ts';
import {AxiosError, AxiosResponse} from 'axios';
import {BackendError} from 'src/app/types/global.ts';
import {getErrorMessage} from 'src/shared/utils/api';

export const getTeamInfoThunk = createAsyncThunk<
    Team,
    void,
    {rejectValue: string}
>('user/getUserInfoThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{teamInfo: Team}> = await getTeamInfo();

        return res.data.teamInfo;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
