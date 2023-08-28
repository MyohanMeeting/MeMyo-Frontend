
import { AdoptComment, NoticeId } from '@/types/Adopt';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { getAdoptCommentsThunk } from '@redux/thunks/AdoptThunk';
import { useEffect } from 'react';
interface Props{
    noticeId:NoticeId
}
function AdoptDetailReview({ noticeId }: Props) {
    const comments = useAppSelector((state) => state.adopt.adoptComments);
    console.log('comments', comments);
    const dispatch = useThunkDispatch();
    useEffect(() => {
        dispatch(getAdoptCommentsThunk(noticeId));
    },[dispatch]);


    return (
        <>
            <div className='border-b border-black'>
                <h2 className='p-2 text-md font-semibold border-b'>댓글 보기</h2>
            {comments?.map((comment:AdoptComment) => {
                return (
                    
                    <div className='w-full p-2 flex border-b'>
                        <div className='flex items-center w-24 h-16'>
                            <img src={comment.author.profileImageUrl} className='w-10 h-10 rounded-full' />
                            <p className='font-semibold'>{comment.author.nickname}</p>
                        </div>
                        <div className='w-full ml-2'>
                            <div className='w-full mr-3 p-2 grow h-full flex flex-wrap text-sm'>
                            {comment.content}
                            </div>
                        </div>    
                    </div>
                )
             
            })
                }
                {!comments &&
                <div className='w-full flex justify-center items-center h-48 text-sm'>
                    댓글이 존재하지 않습니다.
                </div>}
            </div>
        </>
    );
}

export default AdoptDetailReview;

