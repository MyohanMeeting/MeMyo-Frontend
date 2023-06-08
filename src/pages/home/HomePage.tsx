import Card from '../../components/layout/Card';

function HomePage() {
  return (
    <main>
      <section className="flex">
        <img
          className="rounded-md"
          src="https://t3.ftcdn.net/jpg/04/12/12/20/240_F_412122016_Oj7qQ6jaxAIsR8aCcR5nunkYwyaJhj2w.jpg"
        />
        <div className="ml-4">
          <div>
            <h1 className="text-4xl font-semibold">유기묘 입양 사이트</h1>
            <h2 className="text-xl">평생 함께 할 가족</h2>
            <h2 className="text-xl">사지말고 입양하세요</h2>
          </div>
          <div className="flex mt-20 space-x-4">
            <button className="h-24 text-lg font-semibold text-white border rounded-md w-36 border-memyo-yellow4 bg-memyo-yellow8">
              발견했어요
            </button>
            <button className="h-24 text-lg font-semibold border rounded-md text-memyo-yellow8 w-36 border-memyo-yellow8">
              찾고있어요
            </button>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">최근 올라온 공고</h2>
        <ul className="grid grid-cols-4 gap-2 my-4 h-70">
          {new Array(4).fill(1).map((i) => (
            <Card key={i} />
          ))}
        </ul>
        <div className="flex items-center justify-between h-40">
          <div className="w-1/3"></div>
          <ul className="flex items-center justify-center w-1/3">
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
          </ul>
          <div className="w-1/3 text-end">
            <button className="px-10 py-1 font-medium transition-all border rounded-md border-memyo-yellow4 hover:bg-memyo-yellow4 hover:text-white">
              더보기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
