import SVGIcon from '../../components/shared/SVGIcon/SVGIcon';

function PostList() {
  // 현재 https://www.behance.net/gallery/165319265/Pet-Scout-Animal-pet-search-web-service-UIUX-Design 피그마가 없어서 자세한 사이즈 조정을 못하여, 회의 지나고 조정 예정

  return (
    <div className="flex justify-center">
      <main className="w-full max-w-5xl mt-24">
        <h1 className="text-3xl mb-10">유기묘 입양 페이지</h1>

        <div className="flex justify-between items-center mb-6 ">
          <h3 className="text-xl">옵션:</h3>
          <button className="border-2 border-memyo-yellow1 p-2 text-lg rounded-lg before:content-['+'] before:relative before:right-1">
            등록하기
          </button>
        </div>
        <section className="flex gap-4">
          <article className="w-1/4 border-2 border-memyo-yellow1  px-5 py-8 rounded-lg">
            <div className="flex justify-between gap-5   mb-5">
              <button className=" py-6  flex-1 border-2 border-memyo-yellow1  text-center  rounded-lg">
                Lost
              </button>
              <button className=" py-6 flex-1 border-2 border-memyo-yellow1 text-center  rounded-lg">
                button
              </button>
            </div>
            <div className="flex justify-between items-centerr gap-4 mb-7">
              <button className="w-1/3 border-2 border-memyo-yellow1 py-2 rounded-lg text-center aspect-square">
                test
              </button>
              <button className="w-1/3 border-2 border-memyo-yellow1 py-2 rounded-lg text-center aspect-square">
                test
              </button>
              <button className="w-1/3  border-2 border-memyo-yellow1 py-2 rounded-lg text-center aspect-square">
                test
              </button>
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
                  {/* <SVGIcon icon="CheronDownIcon" /> */}
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

            <div className="flex justify-between gap-5   ">
              <button className=" py-2  flex-1 border-2 border-memyo-yellow1  text-center  rounded-lg">
                초기화
              </button>
              <button className=" py-2 flex-1 border-2 border-memyo-yellow1 text-center  rounded-lg">
                적용
              </button>
            </div>
          </article>

          <article
            className="w-3/4 border-2 border-memyo-yellow1  py-5 rounded-lg 
          
          flex flex-col justify-between items-center  "
          >
            <p>Card 컴포넌트 예정</p>

            {/* 더보기 */}
            <p className="border-2 border-memyo-yellow1 p-4 rounded-xl">Observer 객체 사용 </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default PostList;
