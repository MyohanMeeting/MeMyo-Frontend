import { Link } from 'react-router-dom';

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
          <div className="bg-yellow-400 border border-gray-400 h-80 rounded-2xl">
            <h1 className="p-2 text-sm">내가 올린 공고</h1>
            <div className="h-64 m-2 bg-yellow-600 bg-opacity-30"></div>
          </div>
          <div className="border border-gray-400 h-80 rounded-2xl">
            <h1 className="p-2 text-sm">내가 한 분양신청</h1>
            <div className="h-64 m-2 bg-yellow-600 bg-opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
// 내가올린 공고 내가 한 분양 신청 내 정보 수정
export default MyPage;
