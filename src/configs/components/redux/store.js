import { configureStore } from '@reduxjs/toolkit';
import contactSlicer from './contactSlicer';
import authSlice from './authSlicer';

const store = configureStore({
    reducer: {
        contacts: contactSlicer,
        auth: authSlice
    }
})

export default store