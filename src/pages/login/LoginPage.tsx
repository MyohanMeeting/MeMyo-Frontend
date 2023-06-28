import kakaoLoginImg from '../../assets/login/kakao_login_medium_wide.png';
import loginImg from '../../assets/login/login-cat-image.jpeg';
import loginBgImg from '../../assets/login/login-background.jpeg';

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginBgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex items-center justify-center max-w-5xl min-h-screen md:p-16"
    >
      <div className="absolute flex w-4/5 bg-opacity-50 shadow-2xl bottom-12 bg-memyo-yellow8 rounded-2xl">
        <div className="flex flex-col w-8/12 m-auto">
          <div className="text-center md:mt-8">
            <h1 className="pt-6 text-4xl font-semibold text-white md:block">Login</h1>
            <h3 className="hidden text-gray-600 md:block text-md">
              MeMyo - Adopt your Life partner
            </h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-3 text-center md:ml-10 md:mr-10">
              <input
                type="text"
                className="w-full h-10 mt-12 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="이메일"
              />

              <input
                type="password"
                className="w-full h-10 shadow-2xl rounded-xl indent-3 focus:outline-none"
                placeholder="비밀번호"
              />
            </div>
            <div className="space-y-1 text-center md:ml-10 md:mr-10">
              <button className="w-full h-10 text-white bg-blue-500 shadow-xl rounded-xl">
                로그인
              </button>
              <div className="pb-6">
                <img
                  className="w-screen h-10 shadow-xl object-contail rounded-xl"
                  src={kakaoLoginImg}
                  alt="kakaoLoginImage"
                />
              </div>
              <div className="flex items-center justify-center pb-4 space-x-3">
                <p className="text-xs text-gray-600">아직 아이디가 없으신가요?</p>
                <p className="text-xs font-semibold">회원가입</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-9/12 md:block">
          <img
            className="object-fill w-full h-full rounded-r-2xl"
            src={loginImg}
            alt="signupMainImage"
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
