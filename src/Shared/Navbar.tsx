import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Button from "../components/Tags/Button/Button";
import Image from "../components/Tags/Image/Image";

const redirectLinkArr = [
  { label: "Home", redirectLink: "/" },
  { label: "Find tutors", redirectLink: "/find-a-tutor" },
  { label: "Become a Tutor", redirectLink: "/become-tutor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white h-auto py-5 border-b border-gray-200">
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <Image
          Src={logo}
          Alt="Logo"
          className="w-[180px] cursor-pointer h-[50px] object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden xl:flex flex-row gap-x-8 items-center">
          {redirectLinkArr.map((item, idx) => (
            <li key={idx}>
              <NavLink
                className="nav-link-label text-gray-700 hover:text-[#C83C7C] transition"
                to={item.redirectLink}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden xl:flex items-center gap-x-4">
          <Link to="/login">
            <Button className="primary-btn" Txt={"Login"} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <IoMdClose className="text-3xl text-[#C83C7C]" />
            ) : (
              <IoMdMenu className="text-3xl text-[#C83C7C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-xs bg-white z-50 shadow-lg transition-transform duration-700 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-y-4">
            {redirectLinkArr.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.redirectLink}
                  onClick={() => setIsOpen(false)}
                  className="nav-link-label block text-gray-700 hover:text-[#C83C7C] transition"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button className="primary-btn w-full" Txt={"Login"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-10 z-40 xl:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
