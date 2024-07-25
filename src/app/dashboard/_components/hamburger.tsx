// _components/HamburgerButton.tsx
import React from "react";

const HamburgerButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-[30px] right-[20px] md:hidden z-50 p-4 text-gray-500 hover:text-gray-700 focus:outline-none "
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  );
};

export default HamburgerButton;
