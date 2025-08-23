/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import logoimg from "../../../assets/images/LogoDashboard.png";
import Image from "../../../components/Tags/Image/Image";
import { DotSvg } from "../../../components/SvgContainer/SVgContainer";
import { useState } from "react";
import { useLogoutMutation } from "../../../redux/features/auth/auth.api";


const Sidebar = ({ navLinks, showSidebar, setShowSidebar }: any) => {
  const [isActive, setisActive] = useState<string | null>(
    navLinks[0].id
  );

    const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout().unwrap(); // calls /auth/logout
      } catch {
        // even if server fails, force client logout
      } finally {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        navigate("/login");
      }
    };

  return (
    <aside
      className={clsx(
        "fixed xl:relative top-0 left-0 h-screen w-64 bg-white z-40 shadow-md transition-transform duration-300 ease-in-out",
        showSidebar ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
      )}
    >
      <div className="xl:hidden flex justify-end p-4">
        <button onClick={() => setShowSidebar(false)}>
          <IoClose size={24} className="text-gray-700 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6 pt-0 xl:pt-6 flex flex-col justify-between h-full">
        <div>
          <Link to="/">
            <Image Alt="Logo" Src={logoimg} className="mb-10" />
          </Link>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link: any) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.id}
                  to={link.path}
                  end={link.path === "/dashboard"}
                  onClick={() => {
                    setShowSidebar(false);
                    setisActive(link.id);
                  }}
                  className={({ isActive }) =>
                    clsx(
                      "text-base flex gap-x-5 items-center py-3.5 font-medium px-4.5 rounded-[10px] transition-all ease-in-out duration-200 cursor-pointer capitalize",
                      isActive
                        ? "bg-[#051345] text-white"
                        : "text-[#051345] hover:text-white hover:bg-[#051345]"
                    )
                  }
                >
                  <Icon />

                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm font-medium">{link.title}</span>
                    {isActive && <DotSvg />}
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
        >
          {isLoading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
