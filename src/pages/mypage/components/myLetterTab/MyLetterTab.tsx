import React from 'react';

export default function MyLetterTab() {
  return (
    <section className="mx-4 mt-4 space-y-4">
      <div className="w-full">
        <div className="flex gap-2">
          <p className="text-xs text-gray-400">입양 대기중</p>
        </div>
        <div className="flex items-center rounded-2xl">
          <img
            className="object-fill w-[200px] h-[200px] rounded-xl"
            src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
            alt="favoriteCatImage"
          />
          <div className="ml-8 space-y-2">
            <p className="text-sm font-bold">양갱</p>
            <p className="text-xs">서울시 강북구 번동</p>
            <p className="text-xs">노르웨이숲</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <p className="text-xs font-semibold text-green-700">입양 완료</p>
        </div>
        <div className="flex items-center rounded-2xl">
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
    </section>
  );
}
