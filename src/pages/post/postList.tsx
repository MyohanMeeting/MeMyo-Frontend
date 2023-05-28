import AdoptSelectBox from '../../components/adopt-post/AdoptSelectBox';

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
            <AdoptSelectBox
              id={1}
              label="종류"
              options={['러시안블루', '고양이', '러시안블루']}
              selectedValue="state 값"
            />

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
