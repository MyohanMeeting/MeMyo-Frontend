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
        <div className="flex flex-col items-center justify-center p-4 bg-opacity-50 bg-memyo-yellow9">
          <img
            className="object-cover w-24 h-24 border-2 rounded-full border-memyo-yellow10"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60"
            alt="profileImage"
          />
          <p>Nickname</p>
        </div>
      </section>
      <section>
        <ul className="flex justify-around mt-8 border-b-2 cursor-pointer">
          {tabContArr.map((item, index) => {
            return item.tabTitle;
          })}
        </ul>
        <div>{tabContArr[activeIndex].tabCont}</div>
      </section>
    </div>
  );
}

export default MyPage;
