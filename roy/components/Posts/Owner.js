import Image from "next/image";

export default function Owner({ firstname, picture }) {
  return (
    <div className="flex gap-x-2 items-center mt-12 mb-4">
      <Image className="rounded-full" width="40" height="40" src={picture} />
      <p className="font-bold">@{firstname}</p>
    </div>
  );
}
