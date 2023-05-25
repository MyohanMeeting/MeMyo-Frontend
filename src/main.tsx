import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import router from './router';

type stateType = {
  name: string;
  count: number; 
}

const initialState: stateType = {
  name: 'test',
  count: 0
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setName: (
      state,
      action: PayloadAction<{ name: string }>
    ) => {
      state.name = action.payload.name;
    },
  },
  extraReducers: {},
});

const store = configureStore({
  reducer: {
    test: testSlice.reducer
  }
});

export const { setName } = testSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
