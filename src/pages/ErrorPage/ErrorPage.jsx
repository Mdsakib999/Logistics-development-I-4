import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen font-mono flex flex-col items-center justify-center space-y-3 bg-black text-white">
      <h1 className="text-5xl font-bold">404 Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <div className="mt-2">
        <Link
          className="bg-yellow-500 text-xl text-black px-5 py-2 rounded-full hover:bg-black hover:text-yellow-500 hover:border-2 hover:border-yellow-500 font-semibold transition duration-1000"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
