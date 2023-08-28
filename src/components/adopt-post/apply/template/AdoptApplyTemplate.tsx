import AdoptApplyForms from '@components/adopt-post/apply/template/AdoptApplyForms';

function AdoptApplyTemplate() {
    
    
    return (
        <section className='flex flex-col w-full p-2 my-4 h-full mt-6 justify-center'>
                <div className="flex justify-center">
                    <button className="w-20 flex bg-gray-100 p-1">입양 신청</button>
                </div>
                <div>
                    <h2 className='font-semibold mb-9'>입양 신청 진행을 위해 입양신청서를 작성해주세요</h2>
                </div>
                <AdoptApplyForms/>
                <div className='w-full flex justify-center mt-10'>
                    <div className='grid grid-cols-2 gap-1'>
                        <button className="w-40 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center">입양 신청 포기하기</button>
                        <button className="w-48 p-2 bg-memyo-yellow6 hover:bg-memyo-yellow8 text-white text-center flex justify-center items-center">입양 신청을 완료합니다</button>
                    </div>
                </div>    
            </section>
    );
}
export default AdoptApplyTemplate;
