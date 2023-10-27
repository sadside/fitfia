import {combineReducers} from '@reduxjs/toolkit';
import sidebarReducer from 'src/widgets/sidebar/slice/sidebarSlice.ts';
import userReducer from 'src/entities/User/userSlice.ts';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    user: userReducer,
});

export default rootReducer;
