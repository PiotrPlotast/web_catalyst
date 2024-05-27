import Header from "./Header";
export default function LoginPage() {
  return (
    <div className="bg-login-bg-mobile lg:bg-login-bg-desktop h-full">
      <Header />
      <div className="">
        <div className="max-w-md px-8 pt-14">
          <h1 className="font-extrabold text-[#fff] text-5xl mb-10">Sign Up</h1>
          <form>
            <label className="flex flex-col ">
              <span className="text-4xl text-[#fff] mb-1">Email</span>
              <input
                type="text"
                className="bg-[#fff] border border-[#fff] placeholder:text-[#2D98DA] text-[#2D98DA] rounded py-2 pl-4"
                placeholder="Enter your email address"
              />
            </label>
            <label className="flex flex-col mt-6">
              <span className="text-4xl text-[#fff] mb-1">Password</span>
              <input
                type="password"
                className="bg-[#fff] border border-[#fff] placeholder:text-[#2D98DA] text-[#2D98DA] rounded py-2 pl-4"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="bg-[#fff] text-[#2D98DA] py-2 rounded w-full mt-8 hover:bg-[#ececec] transition-all duration-300 ease-in-out"
            >
              Sign up
            </button>
          </form>
          <p className="text-[#D9D9D9] text-center text-pretty text mt-2">
            By creating an account you agree with our{" "}
            <a href="#" className="text-[#fff] hover:underline">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="text-[#fff] hover:underline">
              Privacy Policy
            </a>
            , and our default{" "}
            <a href="#" className="text-[#fff] hover:underline">
              Notification Settings
            </a>
            .
          </p>
          <p className="text-[#D9D9D9] text-center mt-4">
            Already have an account?
            <span>
              <a href="#" className="text-[#fff] ml-2 hover:underline">
                Login
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
