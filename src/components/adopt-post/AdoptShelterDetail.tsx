import { Shelter } from '@/types/Adopt';

interface Props{
    shelter: Shelter
}
function AdoptShelterDetail({shelter}:Props) {
    return (
        <div className="h-full mb-20 mt-16">
            <form>
                <h6 className="text-base font-bold">보호소 정보</h6>
                <div className="w-full mt-4">
                    <div className="relative z-0 w-full mb-6 group">
                        <div className="relative">
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="city" >
                            {shelter.city}
                            </p>         
                        </div>
                        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                    <div className="relative z-0 w-full mb-6 group">
                        <p className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4">{shelter.name}</p>
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <p id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" >{shelter.phoneNumber}</p>
                        <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">전화번호</label>
                    </div>
                </div>
                <div className="w-full">
                    <div className="relative z-0 w-full mb-6 group">
                        <p id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" >{shelter.address}</p>
                        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AdoptShelterDetail;

