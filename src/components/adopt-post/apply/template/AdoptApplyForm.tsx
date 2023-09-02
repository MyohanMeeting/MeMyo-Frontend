import { Input, Select,Form } from '@components/adopt-post/form/Form';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { getAdoptDetailThunk, setAdoptApplyThunk } from '@redux/thunks/AdoptThunk';
import { AdoptApply, Answer, Married } from '@/types/Adopt';

import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

function AdoptApplyFormTest() {
    const { noticeId } = useParams();
    const dispatch = useThunkDispatch();

    const navigate = useNavigate();

    const adopt = useAppSelector((state) => state.adopt.adoptDetail);
    const adoptCatName = useMemo(() => adopt?.cat.name, [adopt]);
     useEffect(() => {
      if (!noticeId) return;
        dispatch(getAdoptDetailThunk(parseInt(noticeId)));
    }, [dispatch]);
    
    
    const onSubmit = useCallback((data: AdoptApply) => {
        console.log('data', data);
        if (noticeId==null) return;
        data.noticeId = parseInt(noticeId);
        return dispatch(setAdoptApplyThunk(data)).then(result => {
            if (result) {
                alert('입양 신청이 완료되었습니다.');
                navigate('/adopt');
            }
        }).catch(error=>console.error('error',error))
        
    },[dispatch]);


    return (
        <div className='w-full h-full flex justify-center bg-white drop-shadow-lg'>
            <div className='w-11/12 h-5/6 flex flex-col justify-center'>
                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양할 유기동물의 이름</label>
                <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={adoptCatName || ''} readOnly />
                <Form<AdoptApply> onSubmit={onSubmit}>
                    {({ register,setValue }) => (
                    <>
                    {/*  신청인 정보  */}
                        <div className="h-full mb-20 mt-16">
                            <h6>신청인 정보</h6>
                                <div className='border  p-2 rounded-md'>
                                    <div className="grid md:grid-cols-3 md:gap-6 mt-4 md:justify-center md:items-center">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>   
                                            <Input {...register("applicant.name")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" />
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">나이</label>   
                                            <Input {...register("applicant.age", { valueAsNumber: true })} type='number' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" />
                                        </div>
                                        <div className="flex flex-wrap relative z-0 w-full mb-6 group mt-2">
                                        <div className="w-full">
                                        <label className="block uppercase tracking-wide peer-focus:font-medium absolute text-sm ext-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="sex">
                                            성별
                                        </label>
                                        <div className="relative">
                                            <Select
                                            {...register("applicant.gender")}
                                            options={[
                                                { label: "여자", value: "FEMALE", index:0 },
                                                { label: "남자", value: "MALE", index: 1 },
                                                { label: "중성", value: "OTHER", index:2 }
                                            ]}
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>                  
                                        </div>
                                    </div> 
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                            <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">전화번호</label>
                                            <Input {...register("applicant.phoneNumber")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" />
                                    </div>
                                    <div className="w-full">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <label htmlFor="job" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">직업</label>
                                            <Input {...register("applicant.job")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
                                            <Input {...register("applicant.address")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" />    
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                    <p className='text-xs text-gray-500'>결혼여부</p>
                                    <div className='flex'>
                                        <label htmlFor='married'>예</label>
                                        <input {...register("applicant.married")} onChange={e=>setValue('applicant.married',e.target.value as Married)}  name='answer1_1' type='checkbox' value='MARRIED' className='w-6 h-6 bg-gray-400' />            
                                        <label htmlFor='married'>아니오</label>
                                        <input {...register("applicant.married")} onChange={e=>setValue('applicant.married',e.target.value as Married)} name='answer1_1' type='checkbox' value='UNMARRIED' className='w-6 h-6 bg-gray-400' />      
                                    </div>
                            </div>
                                </div>        
                        </div>
                        {/* 설문조사 */}
                        <div className='mb-10'>
                            <h2 className='font-semibold mb-3'>다음 설문조사에 응해주세요 ✔</h2>
                            <div className='space-y-5'>
                            <div className='flex justify-between'>
                                <p>반려동물을 키우신 적이 있습니까?</p>
                                <div className='flex'>
                                    <label htmlFor='answer1_1'>예</label>
                                    <input {...register("survey.answer1_1")} onChange={e=>setValue('survey.answer1_1',e.target.value as Answer)}  name='answer1_1' type='checkbox' value='YES' className='w-6 h-6 bg-gray-400' />            
                                    <label htmlFor='answer1_1'>아니오</label>
                                    <input {...register("survey.answer1_1")} onChange={e=>setValue('survey.answer1_1',e.target.value as Answer)} name='answer1_1' type='checkbox' value='NO' className='w-6 h-6 bg-gray-400' />      
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="answer1_2" className="block mt-2 py-2 text-gray-700 w-full mb-2">어떤 종류의 동물인지, 얼마나 키우셨는지, 지금은 어떻게 되었는지 적어주세요.</label>
                                <Input {...register("survey.answer1_2")} className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                            </div>
                            <div className='flex justify-between'>
                                <p>현재 집에 다른 동물을 키우고 계십니까?</p>
                                <div className='flex'>
                                    <label htmlFor='answer2_1' id='answer2_1'>예</label>
                                    <input {...register("survey.answer2_1")} onChange={e=>setValue('survey.answer2_1',e.target.value as Answer)}  name='answer2_1' type='checkbox' value='YES' className='w-6 h-6 bg-gray-400' />            
                                    <label htmlFor='answer2_1'>아니오</label>
                                    <input {...register("survey.answer2_1")} onChange={e=>setValue('survey.answer2_1',e.target.value as Answer)}   name='answer2_1' type='checkbox' value='NO' className='w-6 h-6 bg-gray-400' />      
                                </div>        
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="answer2_2" className="block mt-2 py-2 text-gray-700 w-full mb-2">동물의 종류와 나이, 성별, 중성화 여부를 적어주세요.</label>
                                <Input {...register("survey.answer2_2")} className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                            </div>     
                            <div className='flex flex-col'>
                                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">가족 구성원은 어떻게 되시나요?</label>
                                <Input {...register("survey.answer3")} className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                            </div>
                            <div className='flex justify-between'>
                                <p>가족분들은 유기묘 입양에 찬성하시나요?</p>
                                <div className='flex'>
                                    <label htmlFor='answer4'>모두찬성</label>
                                    <input {...register("survey.answer4")} onChange={e=>setValue('survey.answer4',e.target.value as Answer)} name='answer4' type='checkbox' value='YES' className='w-6 h-6 bg-gray-400' />            
                                    <label htmlFor='answer4'>모두반대</label>
                                    <input {...register("survey.answer4")} onChange={e=>setValue('survey.answer4',e.target.value as Answer)} name='answer4' type='checkbox' value='NO' className='w-6 h-6 bg-gray-400' />                
                                    <label htmlFor='answer4'>부분찬성/반대</label>
                                    <input {...register("survey.answer4")} onChange={e=>setValue('survey.answer4',e.target.value as Answer)} name='answer4' type='checkbox' value='PARTIAL' className='w-6 h-6 bg-gray-400' />            
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양을 원하시는 이유가 무엇인가요?</label>
                                <Input {...register("survey.answer5")} className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                            </div>
                            <div className='flex justify-between'>
                                <p>만일 분양자가 원한다면 입양 후 입양동물의 사진 및 소식을 전해주실 수 있으신가요?</p>
                                <div className='flex'>
                                    <label htmlFor='answer6'>예</label>
                                    <input {...register("survey.answer6")} onChange={e => setValue('survey.answer6', e.target.value as Answer)} name='answer6' type='checkbox' value='YES' className='w-6 h-6 bg-gray-400' />
                                    <label htmlFor='answer6'>아니오</label>
                                    <input {...register("survey.answer6")} onChange={e => setValue('survey.answer6', e.target.value as Answer)} name='answer6' type='checkbox' value='NO' className='w-6 h-6 bg-gray-400' />
                                </div>            
                            </div>        
                        </div>
                        <div className='flex flex-col mt-5'>
                                <label htmlFor="content" className="block mt-2 py-2 text-gray-700 w-full mb-2 font-semibold">입양신청을 원하시면 '입양 신청합니다'라고 따라 적어주세요.</label>
                                <textarea {...register("content")} className="border appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none resize-none" placeholder='입양 신청합니다.' />
                        </div>        
                        </div>
                        {/* 입양신청 버튼 */}
                        <div className='w-full flex justify-center mt-10 mb-10'>
                        <div className='grid grid-cols-2 gap-1'>
                            <Link to={`/adopt/detail/${noticeId}`} className="w-40 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center">입양 신청 포기하기</Link>
                            <button className="w-48 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center"  type='submit'>입양 신청을 완료합니다</button>
                        </div>
                        </div> 
                </>
                )}
        </Form>
        </div>        
        </div>
    );
}
export default AdoptApplyFormTest;

