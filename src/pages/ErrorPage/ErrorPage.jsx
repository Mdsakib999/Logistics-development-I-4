import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold">404 Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <Link
        className="bg-yellow-500 text-black px-5 py-2 mt-2 rounded-full hover:bg-black hover:text-yellow-500 font-semibold transition duration-300"
        to="/"
      >
        Go to Home
      </Link>
    </div>
  );
}
