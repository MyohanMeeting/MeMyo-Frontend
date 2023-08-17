
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type TypedDispatch<T> = ThunkDispatch<T, unknown, AnyAction>;
export const useThunkDispatch = () => useDispatch<TypedDispatch<RootState>>();