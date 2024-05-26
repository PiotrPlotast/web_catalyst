import bgImage from "./assets/bg-image.png";
import { useState } from "react";
export default function LoginPage() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
    <div className="h-[100dvh] overflow-hidden">
      <header className="bg-[#D9D9D9]">
        <nav className="flex justify-between items-center px-8 py-5">
          <a href="#" className=" font-bold text-md ">
            Logo
          </a>
          <div className="flex items-center">
            <div className="hidden md:block md:space-x-10 mr-8">
              <a
                href="#"
                className="text-[#185174] group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-[#185174] to-[#185174] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </span>
              </a>
              <a
                href="#"
                className="text-[#185174] group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-[#185174] to-[#185174] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Discover
                </span>
              </a>
              <a
                href="#"
                className="text-[#185174] group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-[#185174] to-[#185174] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Quick Find
                </span>
              </a>
              <a
                href="#"
                className="text-[#185174] group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-[#185174] to-[#185174] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Create
                </span>
              </a>
              <a
                href="#"
                className="text-[#185174] group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-[#185174] to-[#185174] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Premium
                </span>
              </a>
            </div>
            <a
              href="#"
              className="bg-[#2D98DA] text-[#fff] py-2 px-5 rounded-sm font-medium mr-4 border border-[#D9D9D9] hover:text-[#185174] hover:bg-[transparent] hover:border hover:border-[#185174] transition-all duration-300 ease-in-out"
            >
              Login
            </a>
            <a
              href="#"
              className="text-[#185174] py-2 px-5 border border-[#185174] rounded-sm font-medium hover:text-[#fff] hover:bg-[#2D98DA] hover:border hover:border-[#2D98DA] transition-all duration-300 ease-in-out"
            >
              Sign Up
            </a>
            <button onClick={handleClick} className="ml-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
            <div
              className={`absolute z-50 bg-[#fff] rounded-sm mt-4 right-10 flex flex-col  ${
                showDiv ? "block" : "hidden"
              }`}
            >
              <a href="#" className="text-[#185174]">
                Home
              </a>
              <a href="#" className="text-[#185174]">
                Discover
              </a>
              <a href="#" className="text-[#185174]">
                Quick Find
              </a>
              <a href="#" className="text-[#185174]">
                Create
              </a>
              <a href="#" className="text-[#185174]">
                Premium
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative h-[100%]">
        <div className="bg-[#2D98DA] absolute z-10 max-w-md h-[100%] px-8 pt-14">
          <h1 className="font-extrabold text-[#fff] text-5xl mb-10">Sign Up</h1>
          <form>
            <label className="flex flex-col ">
              <span className="text-4xl text-[#fff] mb-1">Email</span>
              <input
                type="text"
                className="bg-[#2D98DA] border border-[#fff] placeholder:text-[#D9D9D9] text-[#fff] rounded py-2 pl-4"
                placeholder="Enter your email address"
              />
            </label>
            <label className="flex flex-col mt-6">
              <span className="text-4xl text-[#fff] mb-1">Password</span>
              <input
                type="password"
                className="bg-[#2D98DA] border border-[#fff] placeholder:text-[#D9D9D9] text-[#fff] rounded py-2 pl-4"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="bg-[#fff] text-[#2D98DA] py-2 rounded w-full mt-8"
            >
              Sign up
            </button>
          </form>
          <div className="flex my-2 items-center gap-2">
            <span className="h-[1px] bg-[#D9D9D9] w-full"></span>
            <span className="text-[#D9D9D9] ">or</span>
            <span className="h-[1px] bg-[#D9D9D9] w-full"></span>
          </div>
          <button className="bg-[#2D98DA] border border-[#fff] text-[#fff] py-2 rounded w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
            </svg>
            Sign up with Google
          </button>
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
        <div className="absolute top-0  h-[100%]">
          <img
            src={bgImage}
            alt=""
            className="h-full md:w-full xl:h-auto"
            style={{ filter: "hue-rotate(260deg) brightness(40%)" }}
          />
        </div>
      </div>
    </div>
  );
}
