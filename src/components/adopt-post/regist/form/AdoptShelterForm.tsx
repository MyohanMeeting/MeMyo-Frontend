import { useEffect, useState } from 'react';
import { CITY_NAME, Shelter } from '../../../../types/Adopt';
import { useAppDispatch } from '../../../../redux/hooks';
import { setAdoptForm } from '../../../../redux/slice/adoptSlice';

function AdoptShelterForm() {
    const dispatch = useAppDispatch();
    const [shelter, setShelter] = useState<Partial<Shelter>>();
    const [city, setCity] = useState<string>('');
    const cityName = [{ name: '서울시', english: 'SEOUL' },
        { name: '세종시', english: 'SEJONG' },
        { name: '부산시', english: 'BUSAN' }, { name: '대구시', english: 'DAEGU' },
        { name: '인천시', english: 'INCHEON' }, { name: '광주', english: 'GWANGJU' }, { name: '울산시', english: 'ULSAN' },
        { name: '대전시', english: 'DAEJEON' }, { name: '경기도', english: 'GYEONGGI' }, { name: '강원도', english: 'GANGWON' },
        { name: '충청북도', english: 'CHUNGCHEONG_BUK' }, { name: '충청남도', english: 'CHUNGCHEONG_NAM' },
        { name: '전라북도', english: 'JEOLLA_BUK' }, { name: '전라남도', english: 'JEOLLA_NAM' },
        { name: '경상북도', english: 'GYEONGSANG_BUK' }, { name: '경상남도', english: 'GYEONGSANG_NAM' },
        { name: '제주도', english: 'JEJU' }]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log('name',name,value)
        if (name !== 'city') {
          
            setShelter(prev => {
                return {
                    ...prev,
                    [name]: value
                };
            
            });
        
        }
        if (name === 'city') {
            const city = cityName.find(city => city.name === value)?.english as CITY_NAME;
            setCity(value);
            setShelter(prev => {
                return {
                    ...prev,
                    city: city
                }
            })
        }
        
    }

    useEffect(() => {
        dispatch(setAdoptForm({shelter:shelter}))
    },[dispatch,shelter]);

    return (
        <>
     <div className='h-full mb-20 mt-16'>      
        
<form>
  <h6 className="text-base font-bold">shelter 정보를 입력해주세요</h6> 
    <div className="w-full mt-4">
    <div className="relative z-0 w-full mb-6 group">
       <div className="relative">
        <select className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="city" name='city' value={city} onChange={handleChange}>
            {cityName.map((option) => {
                return (
                    <option key={option.english} value={option.name}>{option.name}</option> 
                    )
            })}
        </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>                    
        </div>
        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
    </div>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                         
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" " required value={shelter?.name || ''} onChange={handleChange} />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder="010-0000-0000" required  value={shelter?.phoneNumber || ''}  onChange={handleChange} />
        <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">전화번호</label>
    </div>
    </div>
  <div className="w-full">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" " required  value={shelter?.address || ''}  onChange={handleChange}/>
        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
    </div>
  </div>
    </form>
    </div>  
</>
    );
}

export default AdoptShelterForm;

