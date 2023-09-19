import { Cat } from '@/types/Adopt';

interface Props{
    cat:Cat
}
function AdoptCatDetail({cat}:Props) {
    return (
        <div className="w-full">
            <h3 className="text-center font-bold mb-2">유기묘 정보</h3>
            <div className="w-full border rounded-md flex justify-center items-center">
                <div className="p-4 flex-col flex justify-center w-11/12">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="name">이름</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">{cat.name}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="age">나이</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">{cat.age}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sex">성별</label>
                            <div className="relative">
                                <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="sex">
                                    {cat.sex ==='FEMALE' ? '암컷' :'수컷'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 md:space-y-5">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="registered">Registered</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registered">{cat.registered}</p>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="registNumber">registNumber</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="registNumber">{cat.registNumber}</p>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="species">종</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="species" >{cat.species}</p>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="neutered">중성화 수술 여부</label>
                            <div className="relative">
                                <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="neutered">
                                    {cat.neutered === 'NEUTERED' ? '예' :'아니오'}
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="health">건강 상태</label>
                            <textarea rows={4} className="resize-none block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300  " id="health" placeholder="" readOnly value={cat.healthStatus}>
                            </textarea>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="personality">성격</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="personality" >{cat.personality}</p>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedPlace">발견된 장소</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedPlace">{cat.foundedPlace}</p>
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="foundedTime">발견된 시간</label>
                            <p className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="foundedTime" >{cat.foundedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdoptCatDetail;