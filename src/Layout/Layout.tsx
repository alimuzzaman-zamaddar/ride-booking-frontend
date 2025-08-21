import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { ScrollRestoration, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
