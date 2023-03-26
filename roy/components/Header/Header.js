import Image from "next/image";
import Link from "next/link";
import SVG_LOGO from "../../public/logo.svg";
export default function Header() {
  return (
    <header className="flex justify-between  p-4 md:px-12">
      <Image src={SVG_LOGO} />
      <Link
        className="bg-black text-lg text-white px-8 py-4 rounded-full"
        href="/"
      >
        Connect Wallet
      </Link>
    </header>
  );
}
