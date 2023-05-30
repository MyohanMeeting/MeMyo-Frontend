import approvedImg from '../../../assets/mypage/approved.png';

function CatInfoCard() {
  return (
    <div className=" md:flex md:justify-center md:items-center">
      <div className="border-2 border-gray-200 rounded-2xl md:w-60 md:h-96">
        <div className="flex items-center bg-white rounded-2xl md:flex-col">
          <div>
            <img
              className="object-fill p-3 md:h-64 w-36 h-36 rounded-3xl md:w-60"
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
              alt="favoriteCatImage"
            />
          </div>
          <div className="md:text-center">
            <div className="space-y-2">
              <div className="md:flex md:justify-center md:relative">
                <p className="text-sm font-bold"> Sparky</p>
                <img
                  className="hidden md:block md:right-5 md:w-5 md:absolute"
                  src={approvedImg}
                  alt="stampImage"
                />
              </div>
              {/** state값 (isApproved가 0이면 거절 1이면 승인 2이면 대기중 3이면 hidden 렌더링.*/}
              <p className="text-xs"> 러시안 블루</p>
              <p className="text-xs text-gray-500"> 2세</p>
            </div>

            <div className="flex items-center mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="currentColor"
                className="w-6 h-6 text-sm text-red-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="text-xs">서울특별시 강남구 역삼동</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatInfoCard;
