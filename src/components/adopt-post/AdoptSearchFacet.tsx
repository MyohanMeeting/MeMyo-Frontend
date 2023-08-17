import { useState } from 'react';

interface searchFacet {
  page: number;
  limit: number;
  title: string;
  content: string;
  authorName: string;
  noticeStatus: string;
  catName: string;
  catSpecies: string;
  catAge: string;
  catSex: string;
  neutered: string;
  city: string;
  shelterName: string;
  sort: string;
}

function AdoptSearchFacet() {
  const [facet,setFacet] = useState<Partial<searchFacet>>({})
  return (
    <section className="flex flex-col w-96 border border-memyo-yellow4 p-2 my-4 h-full mt-6 md:block hidden">
          <div className="flex w-full p-2">
            <h2 className='font-semibold text-xl text-memyo-yellow7'>검색 필터</h2>   
         </div>
        <div className='flex flex-col space-y-3 font-semibold'>
           <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>  
           <input type='text' id="title" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='제목' />                  
           <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="content" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='내용' />   
          <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="authorName" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='닉네임' />
           <label htmlFor="catName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catName" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이이름' />
           <label htmlFor="catAge" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catAge" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이나이' />
           <label htmlFor="catSpecies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catSpecies" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이종' />
           <label htmlFor="neutered" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="catSex" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>고양이 성별</option>
                <option value="US">수컷</option>
                <option value="CA">암컷</option>
          </select>
          <label htmlFor="neutered" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="neutered" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>중성화여부</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="city" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>보호소위치</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                  </select>
                  <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="sort" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>정렬 기준</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
        </select>
        <button className="rounded-md w-full mr-2 border h-12 border-memyo-yellow4 bg-memyo-yellow4 text-white">Search</button>
      </div>
         
      </section>
  );
}

export default AdoptSearchFacet;
