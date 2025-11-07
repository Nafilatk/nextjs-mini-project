"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold text-red-600">Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="mt-3 bg-primary text-white px-4 py-2 rounded">
        Try again
      </button>
    </div>
  );
}
