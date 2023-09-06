import { ApplyUser } from '@/types/Adopt';

export const UPDATE_USER = 'UPDATE_USER' as const;

export type ReducerState = Partial<ApplyUser>;
export let initialstate: ReducerState;
export type userFormState = Partial<ApplyUser>;

interface UpdateCatAction {
  type: typeof UPDATE_USER;
  value: userFormState;
}

type ReducerActions = UpdateCatAction;

export const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { ...state, ...action.value };
    }
    default:
      return state;
  }
};
