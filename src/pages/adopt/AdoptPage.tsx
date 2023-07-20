import AdoptSearchMobile from '../../components/adopt-post/AdoptSearchMobile';
import AdoptNav from '../../components/adopt-post/AdoptNav';
import Card from '../../components/layout/Card';
import { useState, useCallback } from 'react'

function AdoptPage() {
  const [isSearch, setIsSearch] = useState(false);
    const setSearchBut = useCallback(() => {
        setIsSearch(prev => !prev);
    }, [isSearch]);
    const closeSearchBut = useCallback(() => {
        setIsSearch(false);
    }, []);
  return (
    <div className='flex md:flex-row flex-col'>
          <AdoptSearchMobile onClick={setSearchBut} isSearch={isSearch} />    
          <AdoptNav isSearch={isSearch} onClose={closeSearchBut} />

      <section className="flex flex-wrap p-2 md:w-2/3">
        <ul className="grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-2 my-4 h-70">
          {new Array(10).fill(1).map((i) => (
            <Card key={i} id={i} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdoptPage;
