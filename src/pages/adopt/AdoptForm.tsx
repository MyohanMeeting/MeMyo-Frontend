import 냥이5 from '../../assets/adopt/냥이5.jpg'
import AdoptCatForm from '../../components/adopt-post/regist/form/AdoptCatForm';
import AdoptRegistNextBut from '../../components/adopt-post/regist/mobile/AdoptRegistNextBut';
import AdoptShelterForm from '../../components/adopt-post/regist/form/AdoptShelterForm';
import AdoptWebTemplate from '../../components/adopt-post/regist/pc/AdoptWebTemplate';
import useResponsiveStatus from '../../hooks/useResponsiveStatus';

function AdoptForm() {
    const isMobile = useResponsiveStatus();
    console.log('isMobile', isMobile);
  return (
      <>
          {!isMobile && <AdoptWebTemplate />}
          {isMobile && 
              ( <div className='flex flex-col'>
          <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center">
              <div className='flex justify-center'>
               <button className='w-20 flex bg-gray-100 p-1'>
                  공고 등록
                  </button>
              </div>
              <div className='flex mt-10'>
                  <h2 className='text-lg font-bold'>유기묘 공고를 등록합니다</h2>
              </div>
              <div className='p-2 mt-5'>
                  <h6 className='text-base font-bold'>등록한 유기묘 공고의 타이틀과 설명을 입력해주세요</h6>
                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">타이틀</label>
                    <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                    <label htmlFor="description" className="block mt-2 py-2 text-gray-700">설명</label>
                    <textarea id="description" rows={4} className="h-full resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
              </div>
              <AdoptRegistNextBut/>
      </section>
        
    </div>
            
                )
          }
      </>
  );
}

export default AdoptForm;