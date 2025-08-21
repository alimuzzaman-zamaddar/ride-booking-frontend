import { NotificationSvg } from "../../../components/SvgContainer/SVgContainer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGetUserDataQuery } from "../../../redux/Slices/authSlice";

interface DashboardNavbarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavbar = ({ setShowSidebar }: DashboardNavbarProps) => {

    const { data: user } = useGetUserDataQuery(undefined);
  return (
    <div className=" w-full bg-white  h-auto py-5">
      <header className="w-full  gap-x-3 flex items-center justify-end z-20 sticky top-0 pr-4 xl:pr-10 ">
        {/* Hamburger Menu */}
        <div className="block xl:hidden mr-auto ml-4">
          <RxHamburgerMenu
            size={24}
            onClick={() => setShowSidebar((prev: boolean) => !prev)}
            className="cursor-pointer"
          />
        </div>
        <div
          className="cursor-pointer"
          // onClick={() => setShowSidebar((prev: boolean) => !prev)}
        >
          <NotificationSvg />
        </div>
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-primary-blue text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-all">
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
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
