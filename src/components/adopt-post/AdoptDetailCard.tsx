import { AiOutlineHeart } from 'react-icons/ai';
import { AdoptDetail } from '@/types/Adopt';
import { memo } from 'react';

interface Props{
    adopt:AdoptDetail
}
function AdoptDetailCard({ adopt }: Props) {
  
    const { title,thumbnail,cat } = adopt;
    return (
         <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center border-b-2 border-gray-300">
              <div className='flex justify-center'>
               <button className='w-20 flex bg-gray-100 p-1'>
                  공고 상세
                  </button>
              </div>
              <div className='flex justify-center mt-10'>
                <h2 className='text-lg font-bold'>{title}</h2>
              </div>
               <div className='flex justify-center mt-10  md:flex-nowrap flex-wrap'>
                  <div className='flex sm:w-9/12 justify-center'>
                      <img src={thumbnail?.url}/>
                  </div>
                  <div className='flex w-full p-2 flex-col md:items-center'>
                      <div className='flex flex-col md:w-2/3 space-y-8 content-between'>
                          <div className='flex space-x-6'>
                      <div className='flex'>
                          <div className='text-gray-400 text-sm pr-6'>이름</div>
                          <div className='font-bold'>{cat.name}</div>
                      </div>
                      <div className='flex'>
                          <div className='text-gray-400 text-sm pr-6'>나이</div>
                                <div className='font-bold'>{cat.age}세</div>
                      </div>
                      </div>
                      <div className='flex space-x-6'>
                      <div className='flex'>
                          <div className='text-gray-400 text-sm pr-6'>성별</div>
                          <div className='font-bold'>수컷</div>
                      </div>
                      <div className='flex'>
                          <div className='text-gray-400 text-sm pr-6'>체중</div>
                                <div className='font-bold'>{cat.weight}kg</div>
                      </div>
                      </div>
                      <div className='flex space-x-6'>
                      <div className='flex flex-col'>
                          <div className='text-gray-400 text-sm pr-6'>종</div>
                                <div className='font-bold'>{cat.species}</div>
                      </div>
                      </div> 
                      <div className='flex space-x-6'>
                      <div className='flex flex-col'>
                          <div className='text-gray-400 text-sm pr-6'>중성화 수술 여부</div>
                          <div className='font-bold'>중성화 수술을 하지 않은 고양이입니다.</div>
                      </div>
                      </div>
                          <div className='flex w-full justify-between'>
                              <button className='w-10 h-10 mr-2 bg-gray-100 text-center flex justify-center items-center'>
                                  <AiOutlineHeart/>
                              </button>
                              <button className='w-full bg-memyo-yellow6 text-white'>입양 신청하기</button>
                          </div>    
                      </div>
                 </div>
              </div>
      </section>
    );
}

export default memo(AdoptDetailCard);