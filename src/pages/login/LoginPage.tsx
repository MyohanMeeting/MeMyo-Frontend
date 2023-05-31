import kakaoLoginImg from '../../assets/login/kakao_login_medium_wide.png';
import loginImg from '../../assets/login/login-cat-image.jpeg';
import loginBgImg from '../../assets/login/login-background-md.jpeg';

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex items-center justify-center max-w-5xl min-h-screen md:p-16 rounded-2xl"
    >
      <div className="absolute flex w-4/5 shadow-2xl bottom-12 bg-memyo-yellow8 rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto">
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-semibold text-white">MeMyo</h1>
            <h3 className="text-gray-600 text-md">Adopt your Life partner</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-3 text-center md:ml-10 md:mr-10">
              <input
                type="text"
                className="w-full h-10 mt-12 rounded-xl indent-3 focus:outline-none"
                placeholder="E-mail"
              />

              <input
                type="password"
                className="w-full h-10 rounded-xl indent-3 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="space-y-1 text-center md:ml-10 md:mr-10">
              <button className="w-full h-10 text-white bg-blue-500 rounded-xl">SignIn</button>
              <div className="pb-6">
                <img
                  className="object-fill w-screen h-10 rounded-xl"
                  src={kakaoLoginImg}
                  alt="kakaoLoginImage"
                />
              </div>
              <div className="flex items-center justify-center p-2 space-x-3">
                <p className="text-xs text-gray-600">아직 아이디가 없으신가요?</p>
                <p className="text-xs font-semibold">signup</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-9/12 md:block">
          <img
            className="object-fill w-full h-full rounded-r-2xl"
            src={loginBgImg}
            alt="signupMainImage"
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
