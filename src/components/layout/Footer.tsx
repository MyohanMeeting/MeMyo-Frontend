function Footer() {
  return (
    <footer className="flex flex-col justify-center space-y-4 text-xs text-white bg-gray-700 p-7 h-52 ">
      <div>
        <p>(주)묘한만남</p>
      </div>
      <div>
        <div>
          <div className="flex space-x-1">
            <p>대표:김미묘&nbsp;|</p>
            <p>사업자등록번호:1234-5678&nbsp;|</p>
            <p>이메일: help@email.com</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <p>전화번호: 1234-5678&nbsp;|</p>
          <p>Github:https://github.com/MyohanMeeting</p>
        </div>
      </div>
      <div>
        <p>&copy; 2023 MeMyo Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
