import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import { GlobeSvgIcon } from "../../SvgContainer/SVgContainer";


type trendingSubjectSchema = {
  Icon: object;
  label: string;
};

const trendingSubjectArr: trendingSubjectSchema[] = [
  {
    Icon: GlobeSvgIcon ,
    label: "Langauage",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Art",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Music",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Chess",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Yoga",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Writing",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Music instruments",
  },
  {
    Icon: GlobeSvgIcon ,
    label: "Martial Arts & Fitness",
  },
];
// const trendingSubjectArr2: trendingSubjectSchema[] = [
//   {
//     Icon: GlobeSvgIcon,
//     label: "Languages",
//   },
//   {
//     Icon: GlobeSvgIcon,
//     label: "Photography",
//   },
//   {
//     Icon: GlobeSvgIcon,
//     label: "Musical instruments",
//   },
//   {
//     Icon: GlobeSvgIcon,
//     label: "Yoga & Pilates",
//   },
//   {
//     Icon: GlobeSvgIcon,
//     label: "Mediation",
//   },
//   {
//     Icon: GlobeSvgIcon,
//     label: "Pilates Lessons",
//   },
// ];

const Skillsset = () => {
  return (
    <>
      <section className="flex flex-col gap-y-12 h-auto pb-10 xl:pb-[80px]  items-center w-full container ">
        <div className=" flex flex-col gap-y-4 items-center">
          <Heading
            Variant="h4"
            Txt={`Take a test, learn a new subject, or develop new skills`}
            className="common-heading "
          />
          <Paragraph
            className="common-sub-heading"
            Txt={
              "Learn or improve in over 10 different subjects: Languages, Art & Drawing, Artist Lessons, Photography."
            }
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 flex-wrap "
        >
          {trendingSubjectArr.map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-auto h-auto px-8 py-[22px] flex flex-row gap-x-3 bg-primary-blue rounded-[8px] items-center  "
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className=" h-auto rounded-[8px] w-auto p-3 bg-white  "
                >
                  <div data-aos="fade-up" data-aos-delay="100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M28.1455 23.4343C29.5183 21.1979 30.2432 18.6244 30.2396 16.0004C30.2432 13.3762 29.5183 10.8023 28.1455 8.56581L28.1379 8.55333C26.8643 6.47756 25.0797 4.76306 22.9546 3.57368C20.8295 2.3843 18.4349 1.75977 15.9996 1.75977C13.5643 1.75977 11.1697 2.3843 9.04459 3.57368C6.91949 4.76306 5.1349 6.47756 3.86137 8.55333L3.85369 8.56581C2.48438 10.8038 1.75977 13.3764 1.75977 16C1.75977 18.6237 2.48438 21.1963 3.85369 23.4343L3.86169 23.4471C5.13527 25.5228 6.91986 27.2372 9.04495 28.4265C11.17 29.6158 13.5646 30.2403 15.9999 30.2402C18.4351 30.2402 20.8297 29.6157 22.9547 28.4263C25.0798 27.2369 26.8643 25.5225 28.1379 23.4468L28.1455 23.4343ZM17.8198 27.7994C17.5484 28.0613 17.236 28.277 16.895 28.4381C16.6152 28.5711 16.3092 28.6401 15.9995 28.6401C15.6897 28.6401 15.3837 28.5711 15.1039 28.4381C14.4552 28.1068 13.8998 27.618 13.4886 27.0167C12.6488 25.8031 12.0266 24.4528 11.6495 23.026C13.0981 22.9368 14.5481 22.8914 15.9996 22.8896C17.4505 22.8896 18.9006 22.9351 20.35 23.026C20.1413 23.7595 19.8806 24.4773 19.5699 25.1738C19.1607 26.1534 18.5665 27.0448 17.8198 27.7994ZM3.38745 16.8H9.13113C9.16856 18.4027 9.34231 19.9993 9.65049 21.5725C8.08036 21.7108 6.51428 21.9006 4.95225 22.1421C4.03745 20.501 3.50271 18.6754 3.38745 16.8ZM4.95225 9.85829C6.51364 10.1002 8.08025 10.2901 9.65209 10.4279C9.34337 12.0009 9.1693 13.5974 9.13177 15.2H3.38745C3.50275 13.3248 4.0375 11.4993 4.95225 9.85829ZM14.1795 4.20069C14.4508 3.9388 14.7632 3.72304 15.1043 3.56197C15.3841 3.42902 15.69 3.36004 15.9998 3.36004C16.3096 3.36004 16.6155 3.42902 16.8953 3.56197C17.5441 3.89334 18.0994 4.38205 18.5107 4.98341C19.3504 6.19697 19.9727 7.54733 20.3497 8.97413C18.9012 9.0633 17.4511 9.10874 15.9996 9.11045C14.5487 9.11045 13.0986 9.06501 11.6492 8.97413C11.8579 8.24057 12.1187 7.5228 12.4294 6.82629C12.8385 5.84672 13.4327 4.95525 14.1795 4.20069ZM28.6118 15.2H22.8681C22.8307 13.5974 22.6569 12.0008 22.3487 10.4276C23.9189 10.2893 25.4849 10.0995 27.047 9.85797C27.9618 11.4991 28.4965 13.3247 28.6118 15.2ZM11.2598 21.448C10.9469 19.9173 10.7702 18.3619 10.7318 16.8H21.2678C21.2297 18.362 21.0533 19.9175 20.7407 21.4484C19.1621 21.3447 17.5817 21.2918 15.9996 21.2896C14.4188 21.2896 12.8389 21.3424 11.2598 21.448ZM20.7395 10.552C21.0523 12.0828 21.229 13.6382 21.2675 15.2H10.7318C10.7699 13.6381 10.9462 12.0826 11.2588 10.5517C12.8375 10.6554 14.4179 10.7083 15.9999 10.7104C17.5807 10.7104 19.1607 10.6575 20.7398 10.5517L20.7395 10.552ZM22.8675 16.8H28.6118C28.4965 18.6753 27.9617 20.5007 27.047 22.1418C25.4854 21.8999 23.9188 21.71 22.3471 21.5722C22.6559 19.9992 22.8299 18.4027 22.8675 16.8ZM26.0876 8.38565C24.7223 8.58255 23.353 8.7385 21.9798 8.85349C21.733 7.93446 21.4147 7.03615 21.0278 6.16677C20.6745 5.36679 20.2299 4.6103 19.703 3.91237C22.2494 4.69338 24.484 6.25899 26.0876 8.38565ZM7.06201 7.06213C8.52279 5.59995 10.3199 4.51843 12.2959 3.91237C12.2659 3.95141 12.2351 3.98853 12.2057 4.02789C11.19 5.48994 10.4502 7.12536 10.0227 8.85349C8.64921 8.73722 7.27897 8.58127 5.91193 8.38565C6.26445 7.91859 6.64872 7.47637 7.06201 7.06213ZM5.91193 23.6144C7.27705 23.4175 8.64633 23.2616 10.0198 23.1466C10.2666 24.0656 10.5849 24.9639 10.9718 25.8333C11.3251 26.6333 11.7696 27.3898 12.2966 28.0877C9.75013 27.3067 7.51556 25.7411 5.91193 23.6144ZM24.9379 24.938C23.4771 26.4002 21.6799 27.4817 19.7039 28.0877C19.734 28.0487 19.7647 28.0116 19.7942 27.9722C20.8099 26.5102 21.5497 24.8747 21.9772 23.1466C23.3507 23.2629 24.7209 23.4188 26.0879 23.6144C25.7354 24.0815 25.3511 24.5237 24.9379 24.938Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                </div>
                <Heading
                  className="text-xl text-white font-[600] "
                  Txt={item.label}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="max-w-[1662px] mx-auto pb-20 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 gap-4">
          {trendingSubjectArr2.map((item, idx) => (
            <div
              key={idx}
              className=" group px-8 py-4 rounded-lg border border-alt-border flex items-center gap-5 hover:bg-primary-blue hover:text-white transition duration-500"
            >
              <div className="p-3 rounded-lg border border-primary-blue shadow-[4px_4px_0_0_#051345] bg-white text-primary-blue group-hover:bg-primary-blue group-hover:text-white group-hover:border-white group-hover:text-primary-blue transition duration-300">
                <item.Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl text-primary-blue font-semibold group-hover:text-white transition duration-300">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default Skillsset;
