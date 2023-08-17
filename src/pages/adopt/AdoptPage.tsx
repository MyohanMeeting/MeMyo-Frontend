import { useAppSelector, useThunkDispatch } from '../../redux/hooks'
import AdoptSearchFacet from '../../components/adopt-post/AdoptSearchFacet';
import { useCallback, useEffect } from 'react';
import getAdoptPostThunk from '../../redux/thunks/AdoptThunk';
import AdoptCard from '../../components/adopt-post/AdoptCard';
import AdoptMobileFacet from '../../components/adopt-post/AdoptMobileFacet';
import { useState } from 'react';




function AdoptPage() {
  const AdoptPosts = useAppSelector((state) => state.adopt.adoptPosts);
  const dispatch = useThunkDispatch();

  const [mobileBut, setMobileBut] = useState(false);
  const handleMobile = useCallback(() => setMobileBut(prev=>!prev),[]);
  

  useEffect(() => {
    dispatch(getAdoptPostThunk({ page: 1, limit: 10 }));
  },[dispatch])
  
  if (!AdoptPosts) return null;
  
  return (
    <div className='flex md:flex-none md:flex-row flex-col'>
      <div className='block w-full md:hidden'>
        <button className='float-right rounded-md w-40 mr-2 border h-10 border-memyo-yellow5 bg-memyo-yellow5 text-white' onClick={handleMobile}>검색필터</button>
      </div>
      <AdoptMobileFacet mobileBut={mobileBut} handleMobile={handleMobile} />
      <AdoptSearchFacet  />
      
        
      <section className="flex flex-wrap p-2 md:w-2/3 w-full">
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-3 my-4 h-70">
          {AdoptPosts.map((adopt) => (
            <AdoptCard key={adopt.noticeId} adopt={adopt} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdoptPage;
