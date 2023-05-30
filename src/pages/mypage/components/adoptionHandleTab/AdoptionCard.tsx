export default function AdoptionCard() {
  return (
    <section>
      <div className="p-2">
        <div className="flex items-center justify-center p-4 m-auto space-x-8 bg-white border-2 border-memyo-yellow7 rounded-xl md:w-[350px] md:h-2/4 md:flex-col md:space-y-3">
          <img
            className="object-fill w-20 h-20 rounded-full md:w-48 md:h-48 md:rounded-full"
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
            alt="adoptionHandleProfile"
          />
          <div className="flex items-center space-x-10 md:flex">
            <div>
              <p className="text-sm font-semibold ">신청자: Woody</p>
              <p className="text-xs text-gray-700">묘종: 스코티쉬 폴드</p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="8 0 16 28"
                  fill="currentColor"
                  className="w-4 h-4 text-sm text-red-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-xs">서울특별시 강남구 역삼동</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <p className="text-xs">예방 접종 여부</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-green-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-700">나이: 2세</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
