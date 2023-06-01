import approvedImg from '../../../assets/mypage/approved.png';
import maleIcon from '../../../assets/mypage/male.png';
import femaleIcon from '../../../assets/mypage/femenine.png';

function CatInfoCard() {
  return (
    <section>
      <div className="md:flex md:justify-center md:items-center">
        <div className="pr-12 border border-memyo-yellow8 rounded-2xl md:w-60 md:h-96">
          <div className="flex items-center justify-between bg-white rounded-2xl md:flex-col">
            <div className="flex">
              <img
                className="object-fill w-40 p-2 md:h-64 h-28 rounded-3xl md:w-60"
                src="data:image/jpeg;base64,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"
                alt="favoriteCatImage"
              />
              <div className="flex items-center space-x-9 ">
                <div className="md:text-center ">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 md:flex md:justify-center md:relative">
                      <p className="text-sm font-bold"> 양갱이</p>
                      <img src={maleIcon} alt="genderIcons" className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-xs"> 러시안 블루</p>
                    <p className="text-xs text-gray-500"> 2세</p>
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="6 0 28 25"
                        fill="currentColor"
                        className="w-4 h-3 text-memyo-yellow8"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-xs ">서울특별시 강남구 역삼동</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-red-500"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatInfoCard;
