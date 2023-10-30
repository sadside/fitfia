import {createAsyncThunk} from '@reduxjs/toolkit';
import {Team, TeamInfo} from 'src/entities/Team/teamModel.ts';
import {AxiosError, AxiosResponse} from 'axios';
import {BackendError} from 'src/app/types/global.ts';
import {editTeamInfo, getTeamInfo} from 'src/shared/api/ApiCalls.ts';
import {getErrorMessage} from 'src/shared/utils/api';

export const getTeamInfoThunk = createAsyncThunk<
    TeamInfo,
    void,
    {rejectValue: string}
>('user/getTeamInfoThunk', async (_, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{teamInfo: TeamInfo}> = await getTeamInfo();

        return res.data.teamInfo;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});

export const createTeamThunk = createAsyncThunk<
    Team,
    string,
    {rejectValue: string}
>('user/getUserInfoThunk', async (name, {rejectWithValue}) => {
    try {
        const res: AxiosResponse<{teamInfo: Team}> = await editTeamInfo(name);

        return res.data.teamInfo;
    } catch (e: unknown | AxiosError<BackendError>) {
        return rejectWithValue(getErrorMessage(e));
    }
});
