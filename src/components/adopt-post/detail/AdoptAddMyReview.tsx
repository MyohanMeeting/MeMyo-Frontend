import { useThunkDispatch } from '@redux/hooks';
import { setAdoptComments } from '@redux/thunks/AdoptThunk';
import { NoticeId } from '@/types/Adopt';
import { useCallback, useState } from 'react';

interface Props{
    noticeId:NoticeId
}
function AdoptAddMyReview({noticeId}:Props) {
    const [content, setContent] = useState<string>();
    const dispatch = useThunkDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    const handleUpdate = useCallback(() => {
        if (content == null) return;
        dispatch(setAdoptComments({ noticeId, content }));
    },[dispatch,content])
    
    return (
        <div className='border-b h-48'>
            <h2 className='p-2 text-md font-semibold border-b'>댓글 달기</h2>
            <div className="w-full p-2 flex justify-between">
                <div className="flex items-center w-24 h-16">
                    <img src="https://storage.googleapis.com/myohanmeeting/profile/e450b369-5a55-4efc-be51-41f7e2a0be57-1692020811373.jpg" className="w-10 h-10 rounded-full" />
                        <p className="font-semibold text-sm">admin</p>
                </div>
                <div className='w-full ml-2 max-w-full'>
                    <input className="w-full mr-3 p-2 grow h-full flex flex-wrap border text-sm" placeholder='댓글을 남겨주세요' onChange={handleChange} value={content} />
                </div>
            </div>
            <div className='float-right'>
                <button className=' bg-memyo-yellow6 p-2 w-20 text-sm text-white rounded-md flex justify-center items-center' onClick={handleUpdate}>댓글 달기</button>
            </div>
        </div>
    );
}
export default AdoptAddMyReview;

