import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import AddPropertyDialog from "./AddPropertyDailog";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={200} height={100} alt="Flow Jobs logo" />
          <span className="text-xl font-bold tracking-tight"></span>
        </Link>
        
          {/* <Link href=""> */}
          <AddPropertyDialog/>

          {/* </Link> */}
      </nav>
    </header>
  );
}