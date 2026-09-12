"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Tik2ZMW() {
  const { push } = useRouter();
  return (
    <div
      className="flex flex-col items-center  gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-slate-100 transition-all duration-300"
      onClick={() => push("https://tiktok-coin-to-kwacha.vercel.app")}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex items-center gap-2">
          <Image
            alt="tik-zmw"
            src={"/tiktok_icon.svg"}
            width={50}
            height={50}
          />
          <p className="font-extrabold">tiktok-coin-to-kwacha app</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Description: </p>
            <p>This is not an official tiktok website</p>
          </div>
          <p>
            This website is a personal project to help tiktok users in zambia
            calculate what coins is worth in zambia kwacha(zmw)
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-sm aspect-auto sm:">
        <iframe
          src="https://www.youtube.com/embed/wEIK5kGIkkw"
          title="TikTok coin to kwacha calculator"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "inherit",
            width: "25rem",
            height: "25rem",
            zIndex: 1000,
            border: ".2rem solid #ccc",
          }}
        />
      </div>
    </div>
  );
}

export default Tik2ZMW;
