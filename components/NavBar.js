import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-7 bg-slate-300 px-2">
      <h1 className=" text-black font-bold">LOGO</h1>
      <ul className="flex space-x-2">
        <Link href="/">
          <li className="cursor-pointer">Home</li>
        </Link>

        <Link href="/users">
          <li className="cursor-pointer">Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
