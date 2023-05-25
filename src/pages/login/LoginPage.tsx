import kakaoLoginImg from "../../assets/login/kakao_login_medium_wide.png";
import loginImg from "../../assets/login/login-cat-image.jpeg";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen mx-8 md:p-16 max-w-7xl">
      <div className="flex bg-orange-300 shadow-2xl rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto">
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-semibold">MeMyo</h1>
            <h3 className="text-gray-600 text-md">Adopt your Life partner</h3>
          </div>
          <div className="space-y-8 text-center md:ml-10 md:mr-10">
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
            <div className="space-y-2">
              <button className="w-full h-10 text-white bg-blue-500 rounded-xl">
                SignIn
              </button>
              <div className="pb-6">
                <img
                  className="object-cover w-screen h-10 rounded-xl"
                  src={kakaoLoginImg}
                  alt="kakaoLoginImage"
                />
              </div>
              <p className="p-4">Signup</p>
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
