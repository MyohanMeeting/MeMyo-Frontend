import Card from '../../components/layout/Card';

function AdoptPage () {
  return (
    <div className='flex'>
      <section className="flex flex-col w-96 border border-memyo-yellow4 p-2 my-4 h-full mt-6">
              <div className="flex w-2/3 p-2">
                  <button className="rounded-md w-full mr-2 border h-12 border-memyo-yellow4 bg-memyo-yellow4 text-white">LOST</button>
                  <button className="rounded-md w-full border h-12 border-memyo-yellow4">FOUND</button>
              </div>
              <div className='flex flex-col space-y-4'>
             <label htmlFor="고양이이름" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="고양이이름" className="bg-gray-50 border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>고양이이름</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                  </select>
                  <label htmlFor="고양이이름" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="고양이이름" className="bg-gray-50 border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>고양이이름</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                  </select>
                  <label htmlFor="고양이이름" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="고양이이름" className="bg-gray-50 border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>고양이이름</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                  </select>
                  <label htmlFor="고양이이름" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <select id="고양이이름" className="bg-gray-50 border border-memyo-yellow4 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-memyo-yellow4 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yello-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                <option selected>고양이이름</option>
                <option value="US">고양이이름</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
              </div>
      </section>

      <section className="flex flex-wrap p-2 w-2/3">
        <ul className="grid grid-cols-3 gap-3 my-4 h-70">
          {new Array(10).fill(1).map((i) => (
            <Card key={i} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdoptPage;
