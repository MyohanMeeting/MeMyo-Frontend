import { Cat } from '@/types/Adopt';

export const UPDATE_CAT = 'UPDATE_CAT' as const;

export type ReducerState = Partial<Cat>;
export let initialstate: ReducerState;
export type catFormState = Partial<Cat>;

interface UpdateCatAction {
  type: typeof UPDATE_CAT;
  value: catFormState;
}

type ReducerActions = UpdateCatAction;

export const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case 'UPDATE_CAT': {
      return { ...state, ...action.value };
    }
    default:
      return state;
  }
};
