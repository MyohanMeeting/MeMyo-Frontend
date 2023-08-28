import { SET_SEARCH_FACET, initialstate, reducer, searchFacetState } from '@reducers/AdoptSearch';
import { useThunkDispatch } from '@redux/hooks';
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk';
import { useCallback, useReducer } from 'react';

function AdoptSearchFacet() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const thunkDispatch = useThunkDispatch();
  const genderArr = [{ name: '암컷', english: 'FEMALE' }, { name: '수컷', english: 'MALE' }];
  const neuteredArr = [{ name: '예', english: 'NEUTERED' }, { name: '아니오', english: 'NONNEUTERED' }];
  const cityName = [{ name: '서울시', english: 'SEOUL' },
  { name: '세종시', english: 'SEJONG' },
  { name: '부산시', english: 'BUSAN' }, { name: '대구시', english: 'DAEGU' },
  { name: '인천시', english: 'INCHEON' }, { name: '광주', english: 'GWANGJU' }, { name: '울산시', english: 'ULSAN' },
  { name: '대전시', english: 'DAEJEON' }, { name: '경기도', english: 'GYEONGGI' }, { name: '강원도', english: 'GANGWON' },
  { name: '충청북도', english: 'CHUNGCHEONG_BUK' }, { name: '충청남도', english: 'CHUNGCHEONG_NAM' },
  { name: '전라북도', english: 'JEOLLA_BUK' }, { name: '전라남도', english: 'JEOLLA_NAM' },
  { name: '경상북도', english: 'GYEONGSANG_BUK' }, { name: '경상남도', english: 'GYEONGSANG_NAM' },
  { name: '제주도', english: 'JEJU' }];
  const sortArr = [{ name:'작성일',english:'createdAt'},{name:'신청수',english:'applicationCount'},{name:'댓글수',english:'commentCount'}]
  

  const handleSearchFacet = useCallback((value: searchFacetState) => {
    dispatch({ type: SET_SEARCH_FACET, value });
  }, []);

  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let val = value;
    
    if (name === 'sort' || name == 'city' || name == 'neutered' || name == 'catSex') {
      switch (name) {
        case 'sort': {
          val = sortArr.find((sort) => sort.name === value)?.english as string;
          break;
        }
        case 'city': {
          val = cityName.find((sort) => sort.name === value)?.english  as string;
          break;
        }
        case 'neutered': {
          val = neuteredArr.find((sort) => sort.name === value)?.english  as string;
          break;
        }
        case 'catSex': {
          val = genderArr.find((sort) => sort.name === value)?.english  as string;
          break;
        }
      }
    } 

    
    handleSearchFacet({ [name]: val });
  }, []);

  const onSearch = useCallback(() => {
    if (state == null) return;
    thunkDispatch(getAdoptPostThunk(state));
  }, [state,thunkDispatch]);
 

  return (
    <section className="flex flex-col w-96 border border-memyo-yellow4 p-2 my-4 h-full mt-6 md:block hidden">
          <div className="flex w-full p-2">
            <h2 className='font-semibold text-xl text-memyo-yellow7'>검색 필터</h2>   
         </div>
        <div className='flex flex-col space-y-3 font-semibold'>
           <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>  
           <input type='text' id="title" name="title" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='제목' value={state?.title || ''} onChange={handleChange} />                  
           <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="content" name="content" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='내용' value={state?.content || ''} onChange={handleChange} />   
          <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="authorName" name="authorName" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='닉네임' value={state?.authorName || ''} onChange={handleChange} />
           <label htmlFor="catName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catName" name="catName" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이이름' value={state?.catName || ''} onChange={handleChange} />
           <label htmlFor="catAge" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catAge" name="catAge" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이나이' value={state?.catAge || ''} onChange={handleChange} />
           <label htmlFor="catSpecies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>   
          <input type='text' id="catSpecies" name="catSpecies" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder='고양이종' value={state?.catSpecies || ''} onChange={handleChange} />
           <label htmlFor="catSex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="catSex" name="catSex" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" value={state?.catSex || ''} onChange={handleChange}>
            <option disabled={true} value="">
            성별
            </option>  
            {genderArr.map((gender) => {
                    return (<option key={gender.english} value={gender.name}>{gender.name}</option>)
                })}
          </select>
            <label htmlFor="neutered" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <select id="neutered" name="neutered" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" value={state?.catSex || ''} onChange={handleChange}>
              <option disabled={true} value="">
                중성화 수술 여부
              </option>
                
                {neuteredArr.map((option) => {
                  return (
                      <option key={option.english} value={option.name}>{option.name}</option> 
                      )
                })}
                </select>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="city" name="city" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" value={state?.city || ''} onChange={handleChange}>
                  <option disabled={true} value="">
                    보호소 위치
                  </option>
                  {cityName.map((option) => {
                      return (
                          <option key={option.english} value={option.name}>{option.name}</option> 
                          )
                  })}
                  </select>
                  <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                  <select id="sort" name="sort" className=" border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" value={state?.sort || ''} onChange={handleChange}>
                   <option disabled={true} value="">
                    정렬 기준
                  </option>
                  {sortArr.map((option) => {
                  return (<option key={option.english} value={option.name}>{option.name}</option>)
                })}
        </select>
        <button className="rounded-md w-full mr-2 border h-12 border-memyo-yellow4 bg-memyo-yellow4 text-white" onClick={onSearch}>Search</button>
      </div>
         
      </section>
  );
}

export default AdoptSearchFacet;
