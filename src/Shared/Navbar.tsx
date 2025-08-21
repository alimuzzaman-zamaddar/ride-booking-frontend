import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
// import logo2 from "../assets/logo/logo2.jpg";
// import logo3 from "../assets/logo/logo3.jpg";
// import logo4 from "../assets/logo/logo4.jpg";
import Image from "../components/Tags/Image/Image";
import Button from "../components/Tags/Button/Button";
import { useEffect, useRef, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useGetUserDataQuery, useLogoutUserMutation } from "../redux/Slices/authSlice";

type NavLinkSchema = {
  label: string;
  redirectLink: string;
};

const redirectLinkArr: NavLinkSchema[] = [
  { label: "Home", redirectLink: "/" },
  { label: "Find tutors", redirectLink: "/find-a-tutor" },
  { label: "Become a Tutor", redirectLink: "/become-tutor" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const avatarMenuRef = useRef<HTMLDivElement>(null);

  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const { data: user } = useGetUserDataQuery(undefined);
  console.log(user, "from navbar");
  // const user = localStorage.getItem("user")
  // console.log(user?., " user form navbar");

  const handleLogout = async () => {
    try {
      // Call the logout mutation
      await logoutUser(); // This triggers the API request for logout
      // Clear user data from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userRole");

      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      // You can show an error toast here if needed
    }
  };

  const goToDashboard = () => {
    if (user?.data?.is_onboarded === 0 && user?.data?.role === "student") {
      navigate("/student-on-boarding");
    } else if (user?.data?.is_onboarded === 0 && user?.data?.role === "tutor") {
      navigate("/onboarding"); // for tutor onboarding
    } else if (user?.data?.is_onboarded === 1) {
      navigate("/dashboard"); // fully onboarded
    } else {
      navigate("/"); // fallback
    }
  };



  // Close avatar menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target as Node)
      ) {
        setIsAvatarMenuOpen(false);
      }
    }

    if (isAvatarMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAvatarMenuOpen]);


  return (
    <nav className="w-full sticky top-0 z-50 bg-white h-auto py-5 border-b border-gray-200">
      <div className="container flex justify-between items-center relative">
        <Image
          onClick={() => navigate("/")}
          Src={logo}
          Alt="Logo"
          className="w-[232px] cursor-pointer h-[54px] object-cover"
        />
        <ul className="hidden xl:flex flex-row gap-x-8 items-center">
          {redirectLinkArr.map((item, idx) => (
            <li key={idx}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link-label ${
                    isActive
                      ? "border-solid border-primary-gray"
                      : "border-transparent"
                  }`
                }
                to={item.redirectLink}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden xl:flex items-center gap-x-4">
          {user ? (
            <>
              <div
                className="relative flex items-center gap-4 "
                ref={avatarMenuRef}
              >
                {/* Avatar */}
                <div
                  onClick={() => setIsAvatarMenuOpen(prev => !prev)}
                  className="w-10 h-10 bg-primary-blue text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-all"
                >
                  {user?.data?.avatar ? (
                    <img
                      src={user?.data?.avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-sm font-semibold uppercase">
                      {user?.data?.name?.slice(0, 2) ||
                        user?.data?.email?.slice(0, 2)}
                    </span>
                  )}
                </div>

                {/* Dropdown */}
                {isAvatarMenuOpen && (
                  <div className="absolute right-0 top-12 w-32 bg-white rounded-lg overflow-hidden border z-50">
                    <button
                      onClick={() => {
                        goToDashboard();
                        setIsAvatarMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-primary-blue hover:text-white transition duration-500"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsAvatarMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-primary-blue hover:text-white transition duration-500"
                    >
                      {isLoading ? "Logging Out..." : "Logout"}
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/Login">
              <Button className="primary-btn" Txt={"Login"} />
            </Link>
          )}
        </div>

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
                  className={({ isActive }) =>
                    `nav-link-label block ${
                      isActive ? "text-[#C83C7C]" : "text-gray-700"
                    }`
                  }
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

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-transparent bg-opacity-10 z-40 xl:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
