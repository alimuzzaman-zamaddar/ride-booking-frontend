import { NotificationSvg } from "../../../components/SvgContainer/SVgContainer";
import { RxHamburgerMenu } from "react-icons/rx";


interface DashboardNavbarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavbar = ({ setShowSidebar }: DashboardNavbarProps) => {

   
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

          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
