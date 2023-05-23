import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PayloadAction, createAction } from '@reduxjs/toolkit/dist/createAction';
import App from './App';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <App />
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
