import AdoptCatForm from '@components/adopt-post/regist/form/AdoptCatForm';
import 냥이5 from '../../../../assets/adopt/냥이5.jpg';

function AdoptUploadPicForm() {
  return (
    <>
      <h6 className="p-2 mt-5 text-base font-bold">등록할 유기묘에 대한 정보를 입력해주세요</h6>
      <h4 className="p-2 mt-4 text-base font-bold">사진 추가하기(필수)</h4>
      <button className="w-32 p-2 mt-2 text-center border-2 rounded-md hover:border-gray-700">
        사진 첨부
      </button>

      <div className="flex flex-col w-full gap-3 mt-5 mb-20 md:flex-row">
        <div className="w-full h-full p-2 pb-5 bg-gray-300 md:w-3/5 mt-7">
          <img src={냥이5} />
          <img src={냥이5} />
          <img src={냥이5} />
        </div>
        <AdoptCatForm />
      </div>
    </>
  );
}

export default AdoptUploadPicForm;
