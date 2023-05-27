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
          <h1 className="text-4xl text-memyo-yellow4 font-semibold">Pet Scout</h1>
          <h2 className="text-3xl">Free search service for lost animals</h2>
          <div className="flex">
            <button className="rounded-md w-1/2 border h-44 border-memyo-yellow4 bg-memyo-yellow4 text-white">
              I LOST A PET
            </button>
            <button className="rounded-md w-1/2 border h-44 border-memyo-yellow4">
              I FOUND A PET
            </button>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-memyo-yellow6">Latest announcements</h2>
        <ul className="grid grid-cols-4 gap-2 my-4 h-70">
          {new Array(4).fill(1).map((i) => (
            <Card key={i} />
          ))}
        </ul>
        <div className="flex items-center justify-between h-40">
          <div className="w-1/3"></div>
          <ul className="flex w-1/3 items-center justify-center">
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
            <li className="w-8 h-1 mx-1 rounded-sm bg-memyo-yellow2"></li>
          </ul>
          <div className="w-1/3 text-end">
            <button className="px-4 py-2 border border-memyo-yellow4 rounded-md font-medium hover:bg-memyo-yellow4 hover:text-white transition-all">
              ALL ANNOUNCEMENTS
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
