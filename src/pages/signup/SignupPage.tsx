import signupMainImg from '@/assets/signupMainImg.jpg';

function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen mx-8 max-w-7xl md:p-16">
      <div className="flex bg-yellow-300 shadow-2xl rounded-2xl">
        <div className="flex flex-col w-7/12 m-auto text-center">
          <div className="pt-8 md:p-7">
            <h1 className="text-4xl font-semibold">Signup</h1>
            <h3 className="text-md"></h3>
          </div>
          <div className="space-y-8 text-center md:ml-10 md:mr-10 ">
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

            <input
              type="text"
              className="w-full h-10 rounded-xl indent-3 focus:outline-none"
              placeholder="Nickname"
            />

            <input
              type="text"
              className="w-full h-10 rounded-xl indent-3 focus:outline-none"
              placeholder="PhoneNumber"
            />

            <div>
              <label className="p-2 bg-yellow-200 rounded-xl" htmlFor="input-file">
                Add Profile Photo
              </label>
              <input type="file" id="input-file" style={{ display: 'none' }} />
            </div>
            <div className="pb-6">
              <button className="w-full h-10 text-white rounded-xl bg-signup-signupBlue">
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="hidden w-9/12 md:block">
          <img
            className="object-cover w-full h-full rounded-r-2xl"
            src={signupMainImg}
            alt="signupMainImage"
          />
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
