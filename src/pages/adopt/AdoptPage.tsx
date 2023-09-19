import { useAppSelector, useThunkDispatch } from '@redux/hooks'
import AdoptSearchFacet from '@components/adopt-post/AdoptSearchFacet';
import { Suspense, lazy, useCallback, useEffect } from 'react';
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk';
// import AdoptCard from '@components/adopt-post/AdoptCard';
import AdoptMobileFacet from '@components/adopt-post/AdoptMobileFacet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '@components/loading/Loading';




function AdoptPage() {
  const AdoptPosts = useAppSelector((state) => state.adopt.adoptPosts);
  const dispatch = useThunkDispatch();

  const [mobileBut, setMobileBut] = useState(false);
  const handleMobile = useCallback(() => setMobileBut(prev=>!prev),[]);
  const delayForDemo = (promise:any) => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}


  const AdoptCardsPreview = lazy(()=>delayForDemo(import('@/components/adopt-post/AdoptCards')))


  useEffect(() => {
    dispatch(getAdoptPostThunk({}));
  },[dispatch])
  
  if (!AdoptPosts) return null;
  
  return (
    <>
    <div className="flex items-center justify-between p-2">
        <h2 className="text-xl font-semibold">입양 공고</h2>
        <div className='grid grid-cols-1'>
          <Link to='/adopt/register' className="p-2 text-center text-sm border-b md:block hidden w-24 bg-memyo-yellow8 hover:bg-memyo-yellow9 text-white border-memyo-yellow8">공고 올리기</Link>          
        </div>
    </div>  
    <div className='flex md:flex-none md:flex-row flex-col'>
      <div className='block w-full md:hidden'>
        <button className='float-right rounded-md w-40 mr-2 border h-10 border-memyo-yellow5 bg-memyo-yellow5 text-white' onClick={handleMobile}>검색필터</button>
      </div>
      <AdoptMobileFacet mobileBut={mobileBut} handleMobile={handleMobile} />
      <AdoptSearchFacet  />
      
      
      <section className="flex flex-wrap p-2 md:w-2/3 w-full h-screen">
        {AdoptPosts && (
        <Suspense fallback={<Loading />}>
          <AdoptCardsPreview AdoptPosts={AdoptPosts} />
        </Suspense>
        )}
      </section>
      </div>
    </>  
  );
}

export default AdoptPage;