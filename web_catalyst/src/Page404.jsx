import LoggedOffHeader from "./LoggedOffHeader";
export default function Page403() {
  return (
    <div className="h-full">
      <header>
        <LoggedOffHeader />
      </header>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-blue-700 text-9xl">404</h1>
        <p className="text-blue-900 text-6xl font-bold uppercase">
          Sorry! This page has not been found
        </p>
        <button>Go Back</button>
      </main>
    </div>
  );
}
