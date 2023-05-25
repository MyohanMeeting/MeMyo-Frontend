const tempImgUrl =
  'https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTk5/MDAxNTc0NDA0OTcwNzM3.YlP2NHVh9AsnIQ12kJpA1kAQ7Q7_6JkfsIMGKfH_g-sg.MuvPx9aqyJC-ULPKzgxk0FgCQoZupoPDhKu0NAvtmSAg.JPEG.rlatjsgkr92/5d3d58633158005938b3beb2107726ce-20191122-153323.jpg?type=w800';

function Card() {
  return (
    <div className="border border-memyo-yellow2 hover:bg-memyo-yellow2 rounded-md transition-all cursor-pointer hover:p-2">
      <img
        className="border-b border-memyo-yellow2 rounded-t-md hover:rounded-md"
        src={tempImgUrl}
      />
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">루루</span>
          <button className="">♡</button>
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
