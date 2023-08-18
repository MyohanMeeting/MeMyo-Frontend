import AdoptCatForm from './AdoptCatForm';
import 냥이5 from '../../../../assets/adopt/냥이5.jpg'

function AdoptUploadPicForm() {
    return (
        <>
            <h6 className='text-base font-bold p-2 mt-5'>등록할 유기묘에 대한 정보를 입력해주세요</h6>
            <h4 className='text-base font-bold mt-4 p-2'>사진 추가하기(필수)</h4>
            <button className='text-center w-32 border-2 p-2 rounded-md hover:border-gray-700 mt-2'>
                사진 첨부
            </button>  
            
            <div className='flex w-full mt-5 gap-3 md:flex-row flex-col mb-20'>
                <div className='md:w-3/5 w-full bg-gray-300 p-2 h-full pb-5 mt-7'>
                    <img src={냥이5}/>
                    <img src={냥이5} />
                    <img src={냥이5} />
                </div>
                <AdoptCatForm/>
                
            </div>
        </>
    );
}

export default AdoptUploadPicForm;

