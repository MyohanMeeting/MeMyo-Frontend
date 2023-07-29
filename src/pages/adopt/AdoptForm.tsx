import 냥이5 from '../../assets/adopt/냥이5.jpg'
import { AiOutlineHeart } from 'react-icons/ai';

function AdoptForm () {
  return (
    <div className='flex flex-col'>
          <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center">
              <div className='flex justify-center'>
               <button className='w-20 flex bg-gray-100 p-1'>
                  공고 등록
                  </button>
              </div>
              <div className='flex mt-10'>
                  <h2 className='text-lg font-bold'>유기묘 공고를 등록합니다</h2>
              </div>
              <form className='p-2 mt-5'>
                  <h6 className='text-base font-bold'>등록한 유기묘 공고의 타이틀과 설명을 입력해주세요</h6>
                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">타이틀</label>
                    <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                    <label htmlFor="description" className="block mt-2 py-2 text-gray-700">설명</label>
                    <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                  <h6 className='text-base font-bold p-2 mt-5'>등록할 유기묘에 대한 정보를 입력해주세요</h6>
                    <h4 className='text-base font-bold mt-4 p-2'>사진 추가하기(필수)</h4>
                    <button className='text-center w-32 border-2 p-2 rounded-md hover:border-gray-700 mt-2'>
                      사진 첨부
                    </button>  
                    
                    <div className='flex w-full mt-5 gap-3 md:flex-row flex-col mb-20'>
                      <div className='md:w-3/5 w-full bg-gray-300 p-2 h-full pb-5 mt-7'>
                          <img src={냥이5}/>
                          <img src={냥이5} />
                          <img src={냥이5} />
                      </div>
                      <div className='w-full'>
                         <h3 className='text-center font-bold mb-2'>유기묘 정보</h3> 
                          <div className='w-full border border-memyo-yellow4 h-full rounded-md flex justify-center items-center'>
                           <div className="p-2 flex-col flex justify-center w-11/12">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="name">
                            이름
                        </label>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="name" type="text" placeholder="000" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="age">
                            나이
                        </label>
                        <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="age" type="text" placeholder="0세" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
                            성별
                        </label>
                        <div className="relative">
                            <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="gender">
                            <option>수컷</option>
                            <option>암컷</option>
                            <option></option>
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
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registered" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="registNumber">
                            registNumber
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registNumber" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="species">
                            종
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="species" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="neutered">
                            중성화 수술 여부
                        </label>
                        <div className="relative">
                            <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="neutered">
                            <option>예</option>
                            <option>아니오</option>
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
                         <textarea  rows={4} className="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="health"  placeholder="" />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="personality">
                            성격
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="personality" type="text" placeholder="" />
                        </div> 
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedPlace">
                            발견된 장소
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedPlace" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedTime">
                            발견된 시간
                        </label>
                         <input className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedTime" type="text" placeholder="" />
                        </div>                  
                    </div>
                    </div>
                         </div>
                      </div>
                       
                  </div>
                  <div className='h-full mb-4 mt-16'>
                      <h6 className="text-base font-bold">shelter 정보를 입력해주세요</h6>
                      <div className='flex flex-wrap -mx-3 mb-6'>
                      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                          <label htmlFor="city" className="block mt-2 py-2 text-gray-700 w-full mb-2">도시</label>
                          <input id="city" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"></input>
                      </div>
                      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                          <label htmlFor="name" className="block mt-2 py-2 text-gray-700 w-full mb-2">이름</label>
                          <input id="name" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"></input>
                      </div>
                      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                          <label htmlFor="phone" className="block mt-2 py-2 text-gray-700 w-full mb-2">전화번호</label>
                          <input id="phone" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"></input>
                      </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block mt-2 py-2 text-gray-700 w-full mb-2">주소</label>
                        <input id="address" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                      </div>
                      <div className='md:w-1/3 w-full md:float-right mt-8'>
                          <button className="w-full bg-memyo-yellow6 text-white h-14">입양 신청하기</button>
                      </div>
                  </div>
              </form>
           
             
      </section>
        
    </div>
  );
}

export default AdoptForm;
