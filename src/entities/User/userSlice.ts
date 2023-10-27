import {createAsyncThunk} from '@reduxjs/toolkit';
import {registerUser} from 'src/shared/api/ApiCalls.ts';
import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

type initialState = {
    user: User | null;
    showCodeInput: boolean;
};

const initialState: initialState = {
    user: null,
    showCodeInput: true,
};

export const registration = createAsyncThunk(
    'user/register',
    async (data: any, {}) => {
        return registerUser(data);
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setShowCodeInput: (state, action) => {
            state.showCodeInput = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(registration.fulfilled, state => {
            state.showCodeInput = true;
            toast('На твою почту отправлен код!');
        });
        builder.addCase(registration.rejected, () => {
            console.log('error');
        });
    },
});

export const {setShowCodeInput} = userSlice.actions;
export default userSlice.reducer;
