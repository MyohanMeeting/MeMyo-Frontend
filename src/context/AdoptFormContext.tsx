import { AdoptDetail, AdoptPostTheme, Cat } from '@/types/Adopt';
import { Dispatch, ReactNode, createContext, useMemo, useReducer } from 'react';

export const UPDATE_FORM = "UPDATE_FORM" as const;
export const UPLOAD_IMG = 'UPLOAD_IMG' as const;
export const UPLOAD_CATINFO = "UPLOAD_CATINFO" as const;
export const UPLOAD_THEME = 'UPLOAD_THEME' as const;

// interface UpdateFormAction {
//     type: typeof UPDATE_FORM,
//     adoptForm: Partial<Omit<AdoptDetail, 'noticeId'>>,
// }

export const UpdateForm = (adoptForm: Partial<Omit<AdoptDetail, 'noticeId'>>) => {
    return {
        type: UPDATE_FORM,
        adoptForm
    }
}
export interface UploadCatInfoAction {
  type: typeof UPLOAD_CATINFO;
  cat: Partial<Cat>;
}

export interface UploadImgAction {
  type: typeof UPLOAD_IMG;
  adoptPreviewImg: Array<File>;
}

export interface UploadThemeAction {
  type: typeof UPLOAD_THEME;
 theme: Partial<AdoptPostTheme>;
}
export const UpdateTheme = (form:Partial<AdoptPostTheme>) => {
    return {
        type: UPLOAD_THEME,
        theme:form
    }
}

export const UploadCatInfo = (form: Partial<Cat>) => {
    return {
        type: UPLOAD_CATINFO,
        cat: form
    }
}

export const UploadCatImg = (form: File[]) => {
    return {
        type: UPLOAD_IMG,
        adoptPreviewImg: form
    }
}

type ReducerActions = UploadImgAction;

interface Context {
    adoptPreviewImg?: Array<File>,
    dispatch:Dispatch<ReducerActions>  
}
export const AdoptPostContext = createContext<Context>({
    adoptPreviewImg: [],
    dispatch:() => {}
});

interface ReducerState {
    adoptPreviewImg?: Array<File>;
}

const initialstate: ReducerState = {
    adoptPreviewImg: [],
};

const reducer = (state = initialstate, action: ReducerActions):ReducerState => {
    switch (action.type) {
        case UPLOAD_IMG: {
            const image = { ...action.adoptPreviewImg };
            return {...state,adoptPreviewImg:image}
        }
        default: return state;
    }
}

interface Props{
    children:ReactNode
}
const AdoptFormContextProvider = ({children}:Props) => {
    // const AdoptRegistState = useAppSelector((state) => state.adopt.adoptForm);
    const [state, dispatch] = useReducer(reducer, initialstate);
    // const appDispatch = useAppDispatch();
    
    const { adoptPreviewImg } = state;
    const value = useMemo(() => ({ adoptPreviewImg,dispatch}), [adoptPreviewImg]);
    
    // useEffect(() => {
       
    //     if (value.adoptForm == null || AdoptRegistState == null) return;
    //     console.log('value',value.adoptForm)
    //     appDispatch(setAdoptForm(value.adoptForm));
    // },[value.adoptForm]);

    return (
        <AdoptPostContext.Provider value={value}>
            {children}
        </AdoptPostContext.Provider>    
    
    )

}



export default AdoptFormContextProvider;
