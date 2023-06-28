import { useEffect, useRef } from 'react';
import { SidebarProps } from '../../../components/layout/NavBar';

function Sidebar({ showSidebar, setShowSidebar }: SidebarProps) {
  const outside = useRef() as React.MutableRefObject<HTMLDivElement>; // typeassertion
  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  });

  function handleOutside(e: React.BaseSyntheticEvent | MouseEvent) {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  }

  function toggleSide() {
    setShowSidebar(!showSidebar);
  }
  return (
    <div id="sidebar" ref={outside}>
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="w-12 h-8 cursor-pointer text-memyo-yellow8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
      <div
        className={`top-20 right-0 w-[45vw] bg-memyo-yellow8 p-10 text-white fixed h-80 z-40  ease-in-out duration-300 rounded-tl-2xl rounded-bl-2xl ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <button
          className="fixed z-50 flex items-center text-4xl text-white cursor-pointer right-3 top-5"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-10 font-semibold text-white">
          <ul className="space-y-4">
            <li>마이페이지</li>
            <li>입양페이지</li>
            <li>공고 올리기</li>
            <li>로그아웃</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
