import {  memo, useCallback, useMemo } from 'react';
import { useAppDispatch } from '@redux/hooks';
import { setAdoptForm } from '@redux/slice/adoptSlice';
interface Props{
    title: string;
    content: string;
}
function AdoptPostTheme({ title, content }: Props) {
    const dispatch = useAppDispatch();
  
    const registTitle = useMemo(() => title || '', [title]);
    const registContent = useMemo(() => content || '', [content]);
   
    
    const handleTheme = useCallback(<T extends HTMLInputElement | HTMLTextAreaElement>(e: React.ChangeEvent<T>) => {
        const { name, value } = e.target;
        console.log('name',name,value)
        if (value == null) return;
        const realName = name;
        dispatch(setAdoptForm({[realName]: value}))
    },[]);
    

    return (
        <>
            <div className='flex mt-10 w-full'>
                  <h2 className='text-lg font-bold font-pretendard'>유기묘 공고를 등록합니다</h2>
              </div>
              <div className='p-2 mt-5'>
                  <h6 className='text-base font-bold'>등록한 유기묘 공고의 타이틀과 설명을 입력해주세요</h6>
                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">타이틀</label>
                    <input id="title" name="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" defaultValue={registTitle} onChange={handleTheme}/>
                    <label htmlFor="content" className="block mt-2 py-2 text-gray-700">설명</label>
                    <textarea id="content" name="content" rows={4} className="h-full resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={registContent} onChange={handleTheme} ></textarea>
            </div>
        </>
            );
}

export default memo(AdoptPostTheme);