import LoggedOffHeader from "./LoggedOffHeader";
export default function Page403() {
  return (
    <div className="h-[100dvh] ">
      <header>
        <LoggedOffHeader />
      </header>
      <main className=" h-[90%] flex flex-col items-center justify-center">
        <h1 className="text-blue-700 text-9xl pb-4 font-black">403</h1>
        <p className="text-blue-900 text-6xl font-bold uppercase">
          Access Denied
        </p>
        <a href="#pagetoback" className="">
          Go Back
        </a>
      </main>
    </div>
  );
}
