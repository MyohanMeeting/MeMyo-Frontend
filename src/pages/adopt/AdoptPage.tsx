import { useAppSelector,useAppDispatch } from '../../redux/hooks'
import AdoptSearchFacet from '../../components/adopt-post/AdoptSearchFacet';
import { useEffect } from 'react';
import getAdoptPostThunk from '../../redux/thunks/AdoptThunk';
import AdoptCard from '../../components/adopt-post/AdoptCard';


function AdoptPage() {
  const AdoptPosts = useAppSelector((state) => state.adopt.adoptPosts);
  const dispatch = useAppDispatch();

  

  useEffect(() => {
    dispatch(getAdoptPostThunk({page:1,limit:10}));
  },[dispatch])
  
  if (!AdoptPosts) return null;
  
  return (
    <div className='flex'>
      <AdoptSearchFacet/>

      <section className="flex flex-wrap p-2 w-2/3">
        <ul className="grid grid-cols-3 gap-3 my-4 h-70">
          {AdoptPosts.map((adopt) => (
            <AdoptCard key={adopt.noticeId} adopt={adopt} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdoptPage;
