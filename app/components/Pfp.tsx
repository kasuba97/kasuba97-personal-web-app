import Image from "next/image";
function Pfp() {
  return (
    <div className="border-2 border-dashed border-border rounded-[.4rem] p-1 my-1 h-fit">
      <Image
        className="rounded-md w-full"
        alt="full-body-image-no-face-though"
        width="350"
        height="350"
        src="/2024.jpg"
      />
    </div>
  );
}

export default Pfp;
