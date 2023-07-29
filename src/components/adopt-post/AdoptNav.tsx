import { GrFormClose } from 'react-icons/gr'

type AdoptNavProps = {
    isSearch: boolean;
    onClose: () => void;
}
function AdoptNav({ isSearch,onClose }: AdoptNavProps) {
    console.log('isSearch',isSearch)
    return (
        <>
            <nav className={`md:block flex-col w-96 p-2 my-4 h-full mt-6  ${isSearch ? 'md:relative fixed bg-white w-full z-10 top-0 left-0':'hidden border border-memyo-yellow4 '}`}>
                <div className='float-right block md:hidden' onClick={onClose} >
                    <button><GrFormClose size={30} /></button>
                 </div>
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
      </nav>   
        </>
    );
}

export default AdoptNav;