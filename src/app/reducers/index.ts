import {combineReducers} from '@reduxjs/toolkit';
import sidebarReducer from 'src/widgets/sidebar/slice/sidebarSlice.ts';
import userReducer from 'src/entities/User/userSlice.ts';
import teamReducer from 'src/entities/Team/teamSlice.ts';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    user: userReducer,
    team: teamReducer,
});

export default rootReducer;
