import Header from "./Header";
export default function LoginPage() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center lg:items-start h-full bg-login-bg-mobile lg:bg-login-bg-desktop bg-cover relative">
        <Header />
        <div className=" w-full px-8 max-w-xl pt-20 md:pt-0">
          <h1 className="font-extrabold text-[#fff] text-5xl mb-10 md:mt-16">
            Login
          </h1>
          <form>
            <label className="flex flex-col ">
              <span className="text-4xl text-[#fff] mb-1">Email</span>
              <input
                type="text"
                className="bg-[#fff] border border-[#fff] placeholder:text-[#2D98DA] text-[#2D98DA] rounded py-2 pl-4 md:p-4 md:text-lg"
                placeholder="Enter your email address"
              />
            </label>
            <label className="flex flex-col mt-6">
              <span className="text-4xl text-[#fff] mb-1">Password</span>
              <input
                type="password"
                className="bg-[#fff] border border-[#fff] placeholder:text-[#2D98DA] text-[#2D98DA] rounded py-2 pl-4 md:p-4 md:text-lg"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="bg-[#fff] text-[#2D98DA] py-2 rounded w-full mt-8 hover:bg-[#ececec] transition-all duration-300 ease-in-out md:p-4 md:text-lg"
            >
              Login
            </button>
          </form>
          <p className="text-[#D9D9D9] text-center mt-4">
            Do not have an account?
            <span>
              <a href="#" className="text-[#fff] ml-2 hover:underline">
                SignUp
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
