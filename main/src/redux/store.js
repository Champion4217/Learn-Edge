import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer.js';
import { courseReducer } from './reducers/courseReducer.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
  },
});

export default store;

export const server = 'https://coursebundler-8v3y.onrender.com/api/v1';
