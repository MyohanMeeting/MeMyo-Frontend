

function AdoptApply() {
    return (
        <div className='flex flex-col'>
            <section className='flex flex-col w-full p-2 my-4 h-full mt-6 justify-center'>
                <div className="flex justify-center">
                    <button className="w-20 flex bg-gray-100 p-1">입양 신청</button>
                </div>
                <div>
                    <h2 className='font-semibold mb-9'>입양 신청 진행을 위해 입양신청서를 작성해주세요</h2>
                </div>
                <div className='w-full h-full flex justify-center bg-white drop-shadow-lg'>
                    <div className='w-11/12 h-5/6 flex flex-col justify-center'>
                        <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양할 유기동물의 이름</label>
                        <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                        <div className="h-full mb-20 mt-16">
                            <h6>신청인 정보</h6>
                            <form className='border  p-2 rounded-md'>
                                <div className="grid md:grid-cols-3 md:gap-6 mt-4">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-memyo-yellow4 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" "  value="" />
                                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" value="" />
                                            <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">연령</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" value="" />
                                            <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">성별</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder="010-0000-0000" value="" />
                                        <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-memyo-yellow4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">전화번호</label>
                                </div>
                                <div className="w-full">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-memyo-yellow4" placeholder=" "  value="" />
                                            <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">주소</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='mb-10'>
                            <h2 className='font-semibold mb-3'>다음 설문조사에 응해주세요 ✔</h2>
                            <div className='space-y-5'>
                                <div className='flex justify-between'>
                                    <p>반려동물을 키우신 적이 있습니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p>현재 집에 다른 동물을 키우고 계십니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">가족 구성원은 어떻게 되시나요?</label>
                                    <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                                </div>
                                <div className='flex justify-between'>
                                    <p>가족분들은 유기묘 입양에 찬성하시나요?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>모두찬성</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>부분찬성/반대</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                               <div className='flex flex-col'>
                                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양을 원하시는 이유가 무엇인가요?</label>
                                    <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양 후 입양동물의 사진 및 소식을 전해주실 수 있으신가요?</label>
                                    <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold mb-3'>규정동의</h2>
                             <div className='flex flex-col space-y-5'>
                                <div className='flex justify-between'>
                                    <p>반려동물이 자연사할 때까지 곁을 지켜주실 수 있습니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p>입양하신 후 끝까지 책임지고 키우실 수 있습니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <p>반려동물의 불임 수술 시행에 동의하십니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                                 <div className='flex justify-between'>
                                    <p>입양 시 반려동물에 대한 책임의 납부에 동의하십니까?</p>
                                    <div className='flex'>
                                        <label htmlFor='yes'>예</label>
                                        <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                        <label htmlFor='no'>아니오</label>
                                        <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-56 flex items-center'>
                            <h2 className='font-semibold mb-3'>위와 같이 유기묘 입양에 동의합니다.</h2>
                        </div>
                        <div className='w-full flex items-center justify-center mb-7'>
                            <h2 className='font-semibold mb-3'>2023년 00월 00일</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-10'>
                    <div className='grid grid-cols-2 gap-1'>
                        <button className="w-40 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center">입양 신청 포기하기</button>
                        <button className="w-48 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center">입양 신청을 완료합니다</button>
                    </div>
                </div>    
            </section>

        </div>


    );
}
export default AdoptApply;

