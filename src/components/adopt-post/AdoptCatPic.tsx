// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { catPicture } from '@/types/Adopt';
interface Props{
    catPictures:catPicture[]
}
function AdoptCatPic({ catPictures }: Props) {
    console.log('cat', catPictures);
  
  return (
    <div className='w-full h-full'>
    <Swiper
        direction={'vertical'}          
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {catPictures.map((pic) => {
            return (<SwiperSlide key={pic.uploadId}>
                <div>
                    <img src={pic.url} className='w-full h-96' />    
                </div>
            </SwiperSlide>)
        })}
      </Swiper>
    </div>
  );
}
export default AdoptCatPic;