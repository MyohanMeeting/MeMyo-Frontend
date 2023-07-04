function Footer() {
  return (
    <footer className="flex flex-col justify-center space-y-4 text-xs text-white bg-gray-700 p-7 h-52 ">
      <p>(주)묘한만남</p>
      <div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p>대표:김미묘</p>
            <p>이메일: help@email.com</p>
          </div>
          <div className="flex items-center justify-between">
            <p>사업자등록번호:1234-5678</p>
            <p>전화번호: 010-1234-5678</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Github:https://github.com/MyohanMeeting</p>
        <p>&copy; 2023 MeMyo Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
