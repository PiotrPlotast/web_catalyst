import { useState } from "react";
export default function Header() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
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
          <button
            onClick={handleClick}
            className={`ml-4 md:hidden transition-all ${
              showDiv ? " rotate-180" : "rotate-0"
            }`}
          >
            {showDiv ? (
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
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
            )}
          </button>
          <div
            className={`absolute bg-[#fff] rounded top-16 right-8 flex flex-col gap-2 p-4 text-center md:hidden ${
              showDiv ? "block" : "hidden"
            }`}
          >
            <a href="#" className="text-[#185174] underline underline-offset-8">
              Home
            </a>
            <a href="#" className="text-[#185174] underline underline-offset-8">
              Discover
            </a>
            <a href="#" className="text-[#185174] underline underline-offset-8">
              Quick Find
            </a>
            <a href="#" className="text-[#185174] underline underline-offset-8">
              Create
            </a>
            <a href="#" className="text-[#185174] underline underline-offset-8">
              Premium
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
