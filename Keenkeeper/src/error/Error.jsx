import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const statusCode = isRouteErrorResponse(error) ? error.status : 500;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-violet-100 via-pink-50 to-sky-100">
      <div className="w-full max-w-md flex flex-col items-center text-center gap-5">

        <div className="w-32 h-32 rounded-full bg-white border-4 border-violet-200 flex items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="26" stroke="#a78bfa" strokeWidth="2"/>
            <path d="M20 20L36 36M36 20L20 36" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <span className="text-7xl font-bold tracking-tight bg-gradient-to-r from-violet-500 via-pink-500 to-sky-500 bg-clip-text text-transparent leading-none">
          {statusCode}
        </span>

        <div className="flex justify-center gap-2">
          <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium">Error</span>
          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">Not Found</span>
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">React Router</span>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-800 mb-1">Lost in the void</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            {is404
              ? "This page doesn't exist — it may have moved or you followed a broken link."
              : "An unexpected error occurred. Try refreshing the page."}
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Take me home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
        </div>

      </div>
    </div>
  );
}