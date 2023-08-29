import { Link, Outlet } from 'react-router-dom';
import kittenIcon from '../../assets/mypage/kitten.png';
import postingIcon from '../../assets/mypage/posting.png';
import userModifyingIcon from '../../assets/mypage/modifying.png';
import favoriteFriendIcon from '../../assets/mypage/favoriteCat.png';

function MyPage() {
  return (
    <div>
      <section className="hidden border-gray-400 md:block md:mb-6 md:border-b">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-3xl font-semibold">MyPage</h1>
        </div>
      </section>
      <section className="h-full p-2 mb-2 space-y-4 md:flex-row md:gap-2">
        <div className="space-y-4">
          <div className="flex items-center h-32 border border-gray-400 rounded-2xl">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt="profileImage"
              className="w-24 h-24 m-4 rounded-full"
            />
            <div className="space-y-2 text-xs">
              <p>이메일:</p>
              <p>닉네임:</p>
              <p>핸드폰번호:</p>
            </div>
          </div>
          <div className="flex items-center justify-between h-32 p-2">
            <Link to="myPosting">
              <div className="flex flex-col items-center space-y-2">
                <img src={postingIcon} alt="kitten-icon" className="w-20 h-20" />
                <p className="text-sm font-bold">내가 올린 공고</p>
              </div>
            </Link>
            <div className="flex flex-col items-center space-y-2">
              <img src={kittenIcon} alt="kitten-icon" className="w-20 h-20" />
              <p className="text-sm font-bold">내가 한 분양신청</p>
            </div>
            <Link to="favoriteFriend">
              <div className="flex flex-col items-center space-y-2">
                <img src={favoriteFriendIcon} alt="kitten-icon" className="w-20 h-20" />
                <p className="text-sm font-bold">최애 친구</p>
              </div>
            </Link>
            <Link to="userInfoModifying">
              <div className="flex flex-col items-center space-y-2">
                <img src={userModifyingIcon} alt="kitten-icon" className="w-20 h-20" />
                <p className="text-sm font-bold">회원 정보 수정</p>
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
export default MyPage;
