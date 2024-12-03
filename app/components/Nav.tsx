"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Nav() {
  const { push } = useRouter();

  return (
    <div className="my-2 flex justify-center items-end">
      <ul className="flex gap-5">
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          main
        </li>
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          projects
        </li>
      </ul>
    </div>
  );
}

export default Nav;
