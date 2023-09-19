import { AiOutlineHeart } from 'react-icons/ai';
import { AdoptDetail } from '@/types/Adopt';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AdoptCatDetail from './AdoptCatDetail';
import AdoptShelterDetail from './AdoptShelterDetail';
import AdoptCatPic from './AdoptCatPic';
import AdoptDetailReview from './detail/AdoptDetailReview';
import { Link, useParams } from 'react-router-dom';
import AdoptAddMyReview from './detail/AdoptAddMyReview';

interface Props{
    adopt: AdoptDetail
}
function AdoptDetailCard({ adopt }: Props) {
    const {noticeId} = useParams();
    

    const { title, cat, catPictures, thumbnail } = adopt;
    const calUrl = catPictures.length > 0 ? catPictures : [thumbnail]
    

    return (
         <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center">
              <div className='flex justify-center'>
               <p className='w-20 flex bg-gray-100 p-1 text-sm justify-center font-pretendard'>
                  공고 상세
                  </p>
              </div>
              <div className='flex justify-center mt-10'>
                <h2 className='text-lg font-bold'>{title}</h2>
            </div>
               <div className='flex justify-center items-center mt-10  md:flex-nowrap flex-wrap pb-5 shadow-md bg-white'>
                <Swiper className='flex sm:w-11/12 w-full justify-center items-center mt-2'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}>
                    {calUrl.map((picture) => {
                        return (
                         <SwiperSlide key={picture.uploadId}>
                            <div className='w-full flex justify-center md:h-80 h-72'> 
                                <img src={picture?.url} className='md:w-9/12 w-full md:h-72 h-64'/>
                            </div>
                        </SwiperSlide>    
                        )
                        
                    })
                    }
                  </Swiper>
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
                              <Link to={`/adopt/apply/${noticeId}`} className='w-full bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center'>입양 신청하기</Link>
                          </div>    
                      </div>
                 </div>
                </div>    
            <div className='border-b border-black'>
                <h2 className='p-2 text-lg font-semibold mt-4 border-b border-black'>상세정보</h2>
                <div className='p-2'>
                    <p className='p-2 text-sm font-semibold'>유기묘의 정보를 확인해주세요.</p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='md:block hidden relative'>
                        <div className='left-10 top-5 absolute h-full w-10/12'>
                            <AdoptCatPic catPictures={catPictures}/>
                        </div>
                        
                    </div>
                    <AdoptCatDetail cat={adopt?.cat} />
                </div>
                <AdoptShelterDetail shelter={adopt?.shelter} />
            </div>
            {noticeId &&
                (
                <>
                    <AdoptDetailReview noticeId={parseInt(noticeId)} />
                    <AdoptAddMyReview noticeId={parseInt(noticeId)}/>
                </>    
                )}
      </section>
    );
}

export default memo(AdoptDetailCard);