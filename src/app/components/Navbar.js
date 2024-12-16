"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-10 h-16 items-center">
      <div className="logo font-bold flex justify-center items-center">
        <img width={44} src="./tea.gif" alt="" />
        <span>GetMeAChai!</span>
      </div>
      {/*    <ul className="flex justify-between items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>SignUp</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
