import Image from "next/image";
import Owner from "./Owner";

export default function Posts({ posts, activeTag }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {posts.map((p) => {
        //Tag filter
        if (!p.tags.includes(activeTag) && activeTag) {
          return null;
        }

        return (
          <li
            className="shadow-md  rounded-xl overflow-hidden hover:translate-y-[-5px] ease duration-200"
            key={p.id}
          >
            <Image
              className=" aspect-square w-full object-cover"
              src={p.image}
              width="400"
              height="400"
              alt={p.tags.join(",")}
            />
            <div className=" rounded-b-xl">
              <div className="p-4">
                <h2 className="text-2xl font-bold break-all">{p.id}</h2>
                <Owner
                  firstname={p.owner.firstName}
                  picture={p.owner.picture}
                />
              </div>
              <div className="bg-black p-4 grid grid-cols-2 text-white font-semibold">
                <div className="flex flex-col">
                  <p className="text-gray-300 ">Current bid</p>
                  <p>{p.randomNumber} ETH</p>
                </div>
                <div>
                  <p className="text-gray-300">Time left</p>
                  <p>{p.timeLeft}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
