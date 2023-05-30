import { useState } from 'react';
import AdoptionHandleTab from './components/adoptionHandleTab/AdoptionHandleTab';
import FavoriteTab from './components/favoriteTab/FavoriteTab';
import MyLetterTab from './components/myLetterTab/MyLetterTab';

function MyPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={
            activeIndex === 0 ? 'is-active border-solid border-b border-memyo-yellow10' : ''
          }
          onClick={() => tabClickHandler(0)}
        >
          최애 친구
        </li>
      ),
      tabCont: <FavoriteTab />,
    },
    {
      tabTitle: (
        <li
          className={
            activeIndex === 1 ? 'is-active border-solid border-b border-memyo-yellow7' : ''
          }
          onClick={() => tabClickHandler(1)}
        >
          나의 신청 현황
        </li>
      ),
      tabCont: <MyLetterTab />,
    },
    {
      tabTitle: (
        <li
          className={
            activeIndex === 2 ? 'is-active border-solid border-b border-memyo-yellow7' : ''
          }
          onClick={() => tabClickHandler(2)}
        >
          입양 관리
        </li>
      ),
      tabCont: <AdoptionHandleTab />,
    },
  ];
  return (
    <div>
      <section>
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-4xl font-bold">MyPage</h1>

          <div className="flex items-center justify-center p-1 space-x-4">
            <img
              className="object-cover w-16 h-16 border-2 rounded-full border-memyo-yellow6"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60"
              alt="profileImage"
            />
            <p className="text-sm font-semibold">Woody</p>
          </div>
        </div>
      </section>
      <section>
        <ul className="flex justify-around mt-4 border-b-2 cursor-pointer">
          {tabContArr.map((item, index) => {
            return item.tabTitle;
          })}
        </ul>
        <div className="h-screen overflow-auto bg-memyo-yellow8 bg-opacity-20">
          {tabContArr[activeIndex].tabCont}
        </div>
      </section>
    </div>
  );
}

export default MyPage;
