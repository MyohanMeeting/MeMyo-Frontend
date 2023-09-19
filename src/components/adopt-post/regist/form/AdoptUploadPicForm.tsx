import AdoptCatForm from '@components/adopt-post/regist/form/AdoptCatForm';
import AdoptUploadCatPic from '@components/adopt-post/regist/form/AdoptUploadCatPic';
import { Cat } from '@/types/Adopt';
import { memo, useMemo } from 'react';

interface Props{
    cat: Partial<Cat>;
}
function AdoptUploadPicForm({cat}:Props) {
    
    const catVal = useMemo(() =>cat, [cat]);

    return (
        <>
            <h6 className='text-base font-bold p-2 mt-5'>등록할 유기묘에 대한 정보를 입력해주세요</h6>
            <div className='flex w-full mt-5 gap-3 md:flex-row flex-col h-full'>
                <AdoptUploadCatPic />
                <AdoptCatForm cat={catVal as Partial<Cat>} />
            </div>
        </>
    );
}

export default memo(AdoptUploadPicForm);