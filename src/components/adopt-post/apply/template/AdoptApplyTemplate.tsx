import AdoptApplyForm from '@components/adopt-post/apply/template/AdoptApplyForm';

function AdoptApplyTemplate() {
    
    
    return (
        <section className='flex flex-col w-full p-2 my-4 h-full mt-6 justify-center'>
                <div className="flex justify-center">
                    <button className="w-20 flex bg-gray-100 p-1">입양 신청</button>
                </div>
                <div>
                    <h2 className='font-semibold mb-9'>입양 신청 진행을 위해 입양신청서를 작성해주세요</h2>
                </div>
                <AdoptApplyForm/>
            </section>
    );
}
export default AdoptApplyTemplate;
