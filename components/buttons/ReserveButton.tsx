"use client";

export const ReserveButton = () => {
  return (
    <button
      onClick={() => {
        window.open("https://www.google.com/maps/reserve/v/dine/c/KHg-RquiJg8");
      }}
      className="mt-2 px-8 py-3 border-4 border-amber-500 bg-black/40 hover:bg-amber-600 cursor-pointer text-white rounded-full transition-colors"
    >
      Réserver
    </button>
  );
};
