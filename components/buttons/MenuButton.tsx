"use client";

export const MenuButton = () => {
  return (
    <button
      onClick={() => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="mt-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors"
    >
      Découvrir notre carte
    </button>
  );
};
