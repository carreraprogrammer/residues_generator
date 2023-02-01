import { combineReducers, configureStore } from '@reduxjs/toolkit';
import WasteSlice from './wastslice';

const wasteReducer = combineReducers({
    Waste: WasteSlice,
  });

const store = configureStore({
  reducer: wasteReducer
})

export default store;