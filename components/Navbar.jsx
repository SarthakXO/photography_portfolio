"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 200) {
        setColor(`white`);
        setTextColor("black");
      } else {
        setColor(`transparent`);
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: `${color}`,
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-500"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={"/"}>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            klik
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={"/#gallery"}>Gallery</Link>
          </li>
          <li className="p-4">
            <Link href={"/portfolio"}>Work</Link>
          </li>
          <li className="p-4">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/**Mobile button */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              size={20}
              onClick={handleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              onClick={handleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        {/*Mobile Menu */}

        <div
          className={`${
            nav
              ? `sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-500`
              : `sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-500`
          }`}
        >
          <ul style={{ color: `${textColor}` }}>
            <li className="p-4 text-4xl hover:text-gray-500 duration-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 duration-500">
              <Link href={"/#gallery"}>Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 duration-500">
              <Link href={"/portfolio"}>Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 duration-500">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
