import React from "react";
import Image from "next/image";

function Body() {
  return (
    <div className="flex gap-2">
      <div className="border-2 border-dashed border-border rounded-[.4rem] p-1 my-1">
        <Image
          className="rounded-md"
          alt="full-body-image-no-face-though"
          width="350"
          height="350"
          src="/2024.jpg"
        />
      </div>
      <div className="flex flex-col gap-5 mx-5 py-2">
        <p className="">hey there 👋, am Kasuba97</p>
        <p>location: lusaka,zambia</p>
        <p>
          Education: self-taught, devnest bootcamp,the coding school,UoPeople
        </p>
        <p>work (Current) soundwork</p>
        <p>hobbies: anime,games,reading,learning</p>
        <p>digital presence:</p>
        <a
          href="https://www.linkedin.com/in/kasuba97/"
          className="text-linkColor"
        >
          linkedin: kasuba97:
        </a>
        <a href="https://x.com/kasuba97" className="text-linkColor">
          X: kasuba97:
        </a>
        <a href="https://github.com/kasuba97" className="text-linkColor">
          github: kasuba97:
        </a>
      </div>
    </div>
  );
}

export default Body;
