import { searchFacet } from '@/types/Adopt';

export const SET_SEARCH_FACET = 'SET_SEARCH_FACET' as const;

export type ReducerState = Partial<searchFacet>;
export let initialstate: ReducerState
export type searchFacetState = Partial<searchFacet>;

interface UpdateCatAction{
    type: typeof SET_SEARCH_FACET,
    value:searchFacetState
}

type ReducerActions =  UpdateCatAction;

export const reducer = (state:ReducerState, action: ReducerActions): ReducerState => {
    switch(action.type){
        case 'SET_SEARCH_FACET': {
            return {...state,...action.value}
        }
        default: return state;
    }
}



