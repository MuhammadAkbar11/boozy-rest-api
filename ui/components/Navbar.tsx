import Link from "next/link";
import React from "react";

type Props = {};

const navigations = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Help",
    href: "/help",
  },
];

function Navbar({}: Props) {
  return (
    <div className="flex w-full mx-auto px-2 fixed ">
      <div className="navbar relative bg-base-200 py-4  z-30 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigations.map((nav, i) => {
                const key = i;
                return (
                  <li key={key}>
                    <Link href={nav.href}>
                      <a>{nav.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-transparent normal-case text-xl text-primary ">
            Boozy.io
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navigations.map((nav, i) => {
              const key = i;
              return (
                <li key={key} className="px-2">
                  <Link href={nav.href}>
                    <a className="text-gray-500 hover:bg-neutral hover:text-current font-semibold ">
                      {nav.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/auth/login"}>
            <a className="btn btn-primary ">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
