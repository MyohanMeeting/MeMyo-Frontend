const tempImgUrl =
  'https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800';

function Card() {
  return (
    <div
      className="border border-memyo-yellow4 hover:bg-memyo-yellow2 rounded-md transition-all 
      cursor-pointer hover:p-2 shadow-sm hover:shadow-md hover:border-memyo-yellow2 box-border"
    >
      <img
        className="border-b border-memyo-yellow4 rounded-t-md hover:rounded-md"
        src={tempImgUrl}
      />
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">루루</span>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-memyo-yellow4 hover:fill-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">묘종</span>
          <span className="text-sm">스코티시폴드</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
