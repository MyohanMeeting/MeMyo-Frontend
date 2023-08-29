import { ApplyUser, gender } from '@/types/Adopt';
import { UPDATE_USER, reducer } from '@reducers/AdoptApply';
import { useAppDispatch } from '@redux/hooks';
import { setAdoptApply } from '@redux/slice/adoptSlice';
import { useCallback, useEffect, useMemo, useReducer } from 'react';

interface Props{
    applicant:Partial<ApplyUser>
}
function AdoptApplyUser({ applicant }: Props) {
    const applicantVal = useMemo(() => applicant, [applicant]);
    const appDispatch = useAppDispatch();

    const createInitialState = (form: Partial<ApplyUser>) => {
        if (form === null) return {};
        return form;
    }
    const [state, dispatch] = useReducer(reducer,createInitialState(applicantVal));

    const genderArr = [{ name: '여자', english: 'FEMALE' }, { name: '남자', english: 'MALE' }, { name: '중성', english: 'OTHER' }];
    
    const initialGenter = useMemo(() => {
      if(applicantVal?.gender == null) return ''
      return genderArr.find(item => item.english === applicantVal.gender)?.name
    },[applicantVal?.gender])
    
    const handleUpdate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const obj = {[name]:value} as Partial<ApplyUser>
        dispatch({ type: UPDATE_USER,value:obj});
    },[])

    const handleGender = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const obj = {gender:genderArr.find(item => item.name === e.target.value)?.english as gender} as Partial<ApplyUser> 
            dispatch({type:UPDATE_USER,value:obj})
    },[])

    useEffect(() => {
        appDispatch(setAdoptApply({ applicant: state }));
    },[state]);
    return (
         <div className="h-full mb-20 mt-16">
                            <h6>신청인 정보</h6>
                            <form className='border  p-2 rounded-md'>
                                <div className="grid md:grid-cols-3 md:gap-6 mt-4 md:justify-center md:items-center">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" " value={state?.name || ''} onChange={handleUpdate}/>
                                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="age" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" value={state?.age || ''} onChange={handleUpdate} placeholder='00'/>
                                            <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">연령</label>
                                    </div>
                                <div className="flex flex-wrap relative z-0 w-full mb-6 group mt-2">
                                    <div className="w-full">
                                    <label className="block uppercase tracking-wide peer-focus:font-medium absolute text-sm ext-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="sex">
                                        성별
                                    </label>
                                    <div className="relative">
                                        <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="sex" value={initialGenter} onChange={handleGender} >
                                            {genderArr.map((gender) => {
                                                return (<option key={gender.english} value={gender.name}>{gender.name}</option>)
                                            })}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>                  
                                    </div>
                                </div>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder="010-0000-0000" value={state?.phoneNumber || ''} onChange={handleUpdate}/>
                                        <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">전화번호</label>
                                </div>
                                <div className="w-full">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="job" id="job" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" "  value={state?.job || ''} onChange={handleUpdate}/>
                                            <label htmlFor="job" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">직업</label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" "  value={state?.address || ''} onChange={handleUpdate} />
                                            <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
                                    </div>
                                </div>
                            </form>
                        </div>
    );
}

export default AdoptApplyUser;