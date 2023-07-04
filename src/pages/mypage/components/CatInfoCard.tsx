import maleIcon from '../../../assets/mypage/male.png';

function CatInfoCard() {
  return (
    <section>
      <div className="border border-memyo-yellow8 rounded-2xl md:w-[348px] md:h-[427px] md:space-y-2">
        <div
          className="hidden md:block md:h-3/4 rounded-tl-2xl rounded-tr-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="flex items-center justify-between p-4 shadow-2xl rounded-2xl md:h-24 md:p-4">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full md:w-full md:h-full md:p-0 md:hidden md:mr-0"
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt="favoriteCatImage"
            />
            <div className="flex items-center ">
              <div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 md:relative">
                    <p className="text-sm font-bold md:text-lg"> 양갱이</p>
                    <img src={maleIcon} alt="genderIcons" className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="md:block md:flex md:space-x-2">
                    <p className="text-xs"> 러시안 블루</p>
                    <p className="text-xs text-gray-500"> 2세</p>
                  </div>
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
            className="w-8 h-8 mr-10 text-red-500 md:mr-0"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default CatInfoCard;
