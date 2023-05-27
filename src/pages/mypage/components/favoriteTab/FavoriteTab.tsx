import { useState } from 'react';

function FavoriteTab() {
  return (
    <div>
      <section className="mx-4 mt-4 space-y-4">
        <div className="w-full">
          <div className="flex items-center rounded-2xl">
            <div className="relative">
              <img
                className="object-fill w-[200px] h-[200px] rounded-xl"
                src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
                alt="favoriteCatImage"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-6 h-6 text-red-600"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>

            <div className="ml-8 space-y-2">
              <p className="text-sm font-bold">양갱</p>
              <p className="text-xs">서울시 강북구 번동</p>
              <p className="text-xs">노르웨이숲</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center rounded-2xl ">
            <img
              className="object-fill w-[200px] h-[200px] rounded-xl"
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
              alt="favoriteCatImage"
            />
            <div className="ml-8 space-y-2">
              <p className="text-sm font-bold">치즈</p>
              <p className="text-xs">서울시 강남구 역삼동</p>
              <p className="text-xs">앙고라</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center rounded-2xl ">
            <img
              className="object-fill w-[200px] h-[200px] rounded-xl"
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
              alt="favoriteCatImage"
            />
            <div className="ml-8 space-y-2">
              <p className="text-sm font-bold">뽀또</p>
              <p className="text-xs">서울시 관악구 신림동</p>
              <p className="text-xs">노르웨이숲</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default FavoriteTab;
