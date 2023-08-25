import { useCallback, useEffect, useReducer, useState } from 'react';
<<<<<<< HEAD
import { UPDATE_CAT, catFormState, initialstate, reducer } from '../../../../reducers/Adopt';
import { gender } from '../../../../types/Adopt';
import { useAppDispatch } from '../../../../redux/hooks';
import { setAdoptForm } from '../../../../redux/slice/adoptSlice';


function AdoptCatForm() {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const appDispatch = useAppDispatch();

    const genderArr = [{ name: '암컷', english: 'FEMALE' }, { name: '수컷', english: 'MALE' }];
    const neuteredArr = [{ name: '예', english: 'NEUTERED' }, { name: '아니오', english: 'NONNEUTERED' }];
    const handleCatForm = useCallback((value:catFormState) => {
=======
import { UPDATE_CAT, catFormState, initialstate, reducer } from '@reducers/Adopt';
import { Cat, gender } from '@/types/Adopt';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setAdoptForm } from '@redux/slice/adoptSlice';


function AdoptCatForm() {
    const adoptForm = useAppSelector((state) => state.adopt.adoptForm);
    const createInitialState = (form:Partial<Cat>) => {
        if (form === null) return initialstate;
        return form;
    }
    const [state, dispatch] = useReducer(reducer, createInitialState(adoptForm?.cat as Partial<Cat>));
    const appDispatch = useAppDispatch();

    const genderArr = [{ name: '암컷', english: 'FEMALE' }, { name: '수컷', english: 'MALE' }];
    const neuteredArr = [{ name: '아니오', english: 'NONNEUTERED' },{ name: '예', english: 'NEUTERED' }];
    const handleCatForm = useCallback((value: catFormState) => {
>>>>>>> develop
        dispatch({ type: UPDATE_CAT, value });
    }, []);
   
    const [sex, setSex] = useState<string>();
    const [neutered, setNeutered] = useState<string>();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>,type:string) => {
      
        if (type === 'sex') {
            setSex(e.target.value);
            handleCatForm({ 'sex': genderArr.find(item => item.name === e.target.value)?.english as gender });
        }
        if(type==='neutered'){
            setNeutered(e.target.value);
            handleCatForm({ 'neutered': neuteredArr.find(item => item.name === e.target.value)?.english });
        }
        
    },[])

    useEffect(() => {
<<<<<<< HEAD
=======
        if (state == null) return;
        console.log('state', state?.neutered ==undefined)
        if (!state?.neutered) {
            handleCatForm({'neutered': 'NONNEUTERED'})
        }
        if (!state?.sex) {
            handleCatForm({ 'sex': 'FEMALE' });
        }
>>>>>>> develop
        appDispatch(setAdoptForm({ cat: state }));
    },[state,appDispatch]);
    
    return (
                <div className='w-full'>
                    <h3 className='text-center font-bold mb-2'>유기묘 정보</h3> 
                    <div className='w-full border border-memyo-yellow4 h-full rounded-md flex justify-center items-center'>
                    <div className="p-2 flex-col flex justify-center w-11/12">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="name">
                            이름
                        </label>
                            <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="name" type="text" placeholder="000" value={state?.name || ''} onChange={(e)=>handleCatForm({'name':e.target.value})} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="age">
                            나이
                        </label>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="age" type="text" placeholder="0" value={state?.age || ''}  onChange={(e)=>handleCatForm({'age':e.target.value})} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sex">
                            성별
                        </label>
                        <div className="relative">
                            <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="sex" value={sex} onChange={(e)=>handleChange(e,'sex')} >
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
                    <div className="flex flex-wrap -mx-3 mb-2 md:space-y-5">
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="registered">
                            Registered
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registered" type="text" placeholder="" value={state?.registered || ''} onChange={(e)=>handleCatForm({'registered':e.target.value})}/>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="registNumber">
                            registNumber
                        </label>
                            <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registNumber" type="text" placeholder="" value={state?.registNumber || ''} onChange={(e)=>handleCatForm({'registNumber':e.target.value})}/>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="species">
                            종
                        </label>
                            <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="species" type="text" placeholder="" value={state?.species || ''} onChange={(e)=>handleCatForm({'species':e.target.value})} />
                        </div>
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="neutered">
                            중성화 수술 여부
                        </label>
                        <div className="relative">
                            <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="neutered" value={neutered} onChange={(e)=>handleChange(e,'neutered')}>
                                {neuteredArr.map((option) => {
                                    return (
                                        <option key={option.english} value={option.name}>{option.name}</option> 
                                        )
                                })}
                            </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        </div>                  
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="health">
                            건강 상태
                        </label>
                         <textarea  rows={4} className="resize-none block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="health"  placeholder="" value={state?.healthStatus || ''} onChange={(e)=>handleCatForm({'healthStatus':e.target.value})} />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="personality">
                            성격
                        </label>
                            <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="personality" type="text" placeholder="" value={state?.personality || ''}  onChange={(e)=>handleCatForm({'personality':e.target.value})} />
                        </div> 
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedPlace">
                            발견된 장소
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedPlace" type="text" placeholder="" value={state?.foundedPlace || ''}   onChange={(e)=>handleCatForm({'foundedPlace':e.target.value})} />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedTime">
                            발견된 시간
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedTime" type="text" placeholder="0000년00월00일" value={state?.foundedAt || ''}   onChange={(e)=>handleCatForm({'foundedAt':e.target.value})} />
                        </div>                  
                    </div>
                    </div>
                         </div>
                      </div>
    );
}

export default AdoptCatForm;

