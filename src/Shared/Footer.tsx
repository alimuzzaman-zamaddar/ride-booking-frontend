import { Link } from "react-router-dom";
import Paragraph from "../components/Tags/Paragraph/Paragraph";
import Image from "../components/Tags/Image/Image";
import logo from "../assets/images/footer-logo.png";
import Button from "../components/Tags/Button/Button";

type navLinksScheam = {
  label: string;
  redirectLink: string;
};

type HotNavLinksSchema = {
  title: string;
  navLink: {
    label: string;
    redirectLink: string;
  }[];
};

const hotNavLinks: HotNavLinksSchema[] = [
  {
    title: "Pages",
    navLink: [
      { label: "home", redirectLink: "/" },
      { label: "about", redirectLink: "/about" },
      { label: "services", redirectLink: "/" },
      { label: "contact us", redirectLink: "/contact-us" },
    ],
  },
  {
    title: "Info",
    navLink: [
      { label: "styles guides", redirectLink: "/style-guides" },
      { label: "liecense", redirectLink: "/liecense" },
      { label: "chanelog", redirectLink: "/chanelog" },
    ],
  },
  {
    title: "Follow Us",
    navLink: [
      { label: "What's app", redirectLink: "/what's-app" },
      { label: "Facebook", redirectLink: "/facebook" },
      { label: "chanelog", redirectLink: "/chanelog" },
    ],
  },
];

const redirectLinkArr: navLinksScheam[] = [
  {
    label: "Privacy Policy",
    redirectLink: "/privacy-policy",
  },
  {
    label: "Terms of Service ",
    redirectLink: "/terms-of-service",
  },
  {
    label: " Cookies Settings",
    redirectLink: "/cookies-settings",
  },
];

const Footer = () => {
  return (
    <footer className=" w-full h-auto py-10  xl:py-[100px] px-5   bg-primary-black ">
      <div className="container flex flex-col relative  gap-y-8">
        <div className="flex flex-col xl:flex-row w-full items-center gap-x-6  justify-between ">
          <div className="flex w-full xl:w-1/2 flex-col  gap-y-[60px] mb-6 ">
            <div className="flex flex-col gap-y-8">
              <Image
                Src={logo}
                Alt="not found"
                className="w-[232px] h-[54px] object-cover  "
              />
            </div>
            <Paragraph
              className=" max-w-[663px] text-base text-secondary-white font-[600] "
              Txt={
                "Join our newsletter to stay up to date on features and releases."
              }
            />
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-[639px] w-full h-auto py-3 px-3 border-[1px] border-solid rounded-[8px] border-secondary-white cursor-pointer flex flex-row gap-x-2 "
            >
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                placeholder="Enter your email address"
                className="w-full text-lg text-white font-normal outline-none px-3 "
                type="email"
              />
              <Button
                className="bg-white text-primary-gray hover:border-white  border-[1px] border-transparent  hover:bg-transparent hover:text-white cursor-pointer ease-in-out duration-300 py-1 xl:py-5 text-sm px-5 xl:px-10 xl:text-xl font-[600] leading-[164%] h-auto rounded-[8px] w-auto "
                Txt="Submit"
              />
            </div>
            <Paragraph
              className=" max-w-[663px] text-base text-secondary-white font-[600] "
              Txt={
                "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company."
              }
            />
          </div>
          <ul className="flex w-full xl:w-1/2 flex-wrap sm:flex-row justify-between gap-y-4 xl:gap-y-0">
            {hotNavLinks.map((item, idx) => {
              return (
                <div key={idx} className="flex  gap-y-6 flex-col">
                  <Paragraph
                    className="text-2xl text-white font-bold "
                    Txt={item.title}
                  />
                  <ul className="flex  flex-col gap-y-6 ">
                    {item.navLink.map((link, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-md xl:text-lg  capitalize text-secondary-white font-bold "
                            to={link.redirectLink}
                          >
                            {" "}
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-y-8 w-full ">
          <hr
            data-aos="fade-up"
            data-aos-delay="100"
            className="h-[1px] w-full border-1 border-secondry-gray "
          />
          <ul className="flex flex-row gap-x-5">
            {redirectLinkArr.map((item, idx) => {
              return (
                <li data-aos="fade-up" data-aos-delay="100" key={idx}>
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className=" text-xs xl:text-base text-secondary-white font-normal xl:font-[600] "
                    to={item.redirectLink}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
