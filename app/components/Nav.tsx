import React from "react";

function Nav() {
  return (
    <div className="my-2">
      <ul className="flex gap-5">
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          main
        </li>
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          projects
        </li>
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          bootcamps
        </li>
        <li className="hover:bg-btn hover:text-white px-1 rounded-md cursor-pointer">
          other
        </li>
      </ul>
    </div>
  );
}

export default Nav;
