import { AdoptComment, NoticeId } from '@/types/Adopt';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { getAdoptCommentsThunk } from '@redux/thunks/AdoptThunk';
import { useEffect } from 'react';
interface Props {
  noticeId: NoticeId;
}
function AdoptDetailReview({ noticeId }: Props) {
  const comments = useAppSelector((state) => state.adopt.adoptComments);
  console.log('comments', comments);
  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(getAdoptCommentsThunk(noticeId));
  }, [dispatch]);

  const isComments = comments && comments.length > 0;

  return (
    <>
      <div className="border-b border-black">
        <h2 className="p-2 font-semibold border-b text-md">댓글 보기</h2>
        {isComments &&
          comments?.map((comment: AdoptComment) => {
            return (
              <div className="flex w-full p-2 border-b" key={comment.noticeCommentId}>
                <div className="flex items-center w-24 h-16">
                  <img src={comment.author.profileImageUrl} className="w-10 h-10 rounded-full" />
                  <p className="font-semibold">{comment.author.nickname}</p>
                </div>
                <div className="w-full ml-2">
                  <div className="flex flex-wrap w-full h-full p-2 mr-3 text-sm grow items-center">
                    {comment.content}
                  </div>
                </div>
              </div>
            );
          })}
        {comments?.length === 0 && (
          <div className="flex items-center justify-center w-full h-48 text-sm">
            댓글이 존재하지 않습니다.
          </div>
        )}
      </div>
    </>
  );
}

export default AdoptDetailReview;
