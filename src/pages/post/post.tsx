function Post() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-5xl mt-24">
        <h1 className="text-3xl mb-10">유기묘 입양 페이지</h1>

        <section className="flex justify-between gap-6">
          <div className="flex-1  border-2 border-memyo-yellow2 rounded-xl p-7">
            <div className=" flex justify-between gap-6">
              <div className="flex-1">
                <p className="mb-8">AD Type</p>
                <div className="flex justify-between gap-5   mb-5">
                  <button className=" py-5  flex-1 border-2 border-memyo-yellow1  text-center  rounded-lg">
                    Lost
                  </button>
                  <button className=" py-5 flex-1 border-2 border-memyo-yellow1 text-center  rounded-lg">
                    button
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-8">Animal Type</p>
                <div className="flex justify-between items-centerr gap-4 mb-7">
                  <button className="w-1/3 border-2 border-memyo-yellow1 py-5  rounded-lg text-center ">
                    test
                  </button>
                  <button className="w-1/3 border-2 border-memyo-yellow1 py-5 rounded-lg text-center ">
                    test
                  </button>
                  <button className="w-1/3  border-2 border-memyo-yellow1 py-5 rounded-lg text-center ">
                    test
                  </button>
                </div>
              </div>
            </div>

            <button type="button" disabled className="relative w-full   mb-52">
              <div className="relative w-full flex items-center justify-between border-2 border-memyo-yellow4 rounded-md px-2 py-1 ">
                종류
                {/* svg 는 컴포넌트로 쉽게 쓸 수 있게끔 변경예정  */}
                <svg viewBox="0 0 512 512" width="1rem" height="1rem">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M112 184l144 144 144-144"
                  />
                </svg>
              </div>
              <ul
                className="absolute block left-0 right-0 top-full  max-h-36 overflow-y-auto transition-all py-2 bg-slate-100 rounded-lg text-center shadow-md  "
                // webkit scroll bar : none -- tailwind 는 따로 패키지를 다운받아야함.
                // 해당 ul tag top:calc(100% + 0.5rem) 은 어떻게 적용을 해줘야할까?
              >
                <li
                  className="relative w-full flex items-center justify-center p-3 transition-all cursor-pointer hover:bg-memyo-yellow1 hover:bg-opacity-50  "
                  // tailwind rgba 적용 방법?
                >
                  <svg
                    viewBox="0 0 16 16 "
                    width="1rem"
                    height="1rem"
                    className="absolute left-4 "
                    // 해당 부분 Checkbox SVG hidden은 css 처리로 작업하기에 너무 깊어져서 상태를 이용해 해결 예정
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>

                  <span>러시안블루</span>
                </li>
                <li className="relative w-full flex items-center justify-center p-3 transition-all cursor-pointer hover:bg-memyo-yellow1 hover:bg-opacity-50  ">
                  고양이
                </li>
                <li className="relative w-full flex items-center justify-center p-3 transition-all cursor-pointer hover:bg-memyo-yellow1 hover:bg-opacity-50  ">
                  러시안블루
                </li>
                <li className="relative w-full flex items-center justify-center p-3 transition-all cursor-pointer hover:bg-memyo-yellow1 hover:bg-opacity-50  ">
                  고양이
                </li>
              </ul>
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="border-2 border-memyo-yellow2 rounded-xl p-7">
              <p className="text-3xl mb-5">Add a photo</p>

              <span className="text-lg mb-3 block">upload image</span>

              <div className="flex flex-wrap justify-between gap-6 ">
                <div className="relative basis-1/4 border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>

                <div className="relative basis-1/4  border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>

                <div className="relative basis-1/4  border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>

                <div className="relative basis-1/4  border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>

                <div className="relative basis-1/4  border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>

                <div className="relative basis-1/4  border-4 border-memyo-yellow5  rounded-xl">
                  <input type="file" hidden />

                  <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
                    <div className="w-full aspect-square rounded-full overflow-hidden"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-memyo-yellow2 rounded-xl p-7">
              <h3 className="text-3xl mb-5">Contacts</h3>

              <input
                type="text"
                className="block w-full p-3 mb-4 border-2 border-memyo-yellow2 rounded-lg"
                placeholder="name"
              />

              <input
                type="text"
                className="block  w-full p-3 mb-4 border-2 border-memyo-yellow2 rounded-lg"
                placeholder="phone Number"
              />

              <button className="float-right py-3 px-14   border-2 border-memyo-yellow2 rounded-lg">
                등록하기
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Post;
