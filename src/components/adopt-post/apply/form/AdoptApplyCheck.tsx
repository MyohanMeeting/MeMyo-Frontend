import { Survey } from '@/types/Adopt';

interface Props{
    survey:Partial<Survey>
}
function AdoptApplyCheck({ survey }: Props) {
    console.log('survey', survey);
    return (
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
            <div className='flex flex-col'>
                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">어떤 종류의 동물인지, 얼마나 키우셨는지, 지금은 어떻게 되었는지 적어주세요.</label>
                <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
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
                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">동물의 종류와 나이, 성별, 중성화 여부를 적어주세요.</label>
                <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
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
                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">만일 분양자가 원한다면 입양 후 입양동물의 사진 및 소식을 전해주실 수 있으신가요?</label>
                <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" />
            </div>
        </div>
    </div>
    );
}

export default AdoptApplyCheck;