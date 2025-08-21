import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import usa from "../../../assets/images/countries/usa.png";
import ukraine from "../../../assets/images/countries/ukraine.png";
import ksa from "../../../assets/images/countries/ksa.png";
import camboda from "../../../assets/images/countries/cambodia.png";
import brazil from "../../../assets/images/countries/brazil.svg";
import french from "../../../assets/images/countries/french.png";
import german from "../../../assets/images/countries/german.svg";
import iran from "../../../assets/images/countries/iran.svg";
import italy from "../../../assets/images/countries/italy.svg";
import japan from "../../../assets/images/countries/japan.png";
import mandar from "../../../assets/images/countries/mandar.svg";
import philip from "../../../assets/images/countries/philipan.svg";
import russsia from "../../../assets/images/countries/russia.png";
import spain from "../../../assets/images/countries/spain.png";
import thailand from "../../../assets/images/countries/thailand.png";
import vietnam from "../../../assets/images/countries/vietnam.svg";
import Image from "../../Tags/Image/Image";
import Marquee from "react-fast-marquee";

type tutorsOriginSchema = {
  imgUrl: string;
  origin: string;
  tutorCount: number;
};

const isAdminRoute =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/dashboard");

const tutorsOriginArr: tutorsOriginSchema[] = [
  {
    imgUrl: usa,
    origin: "USA",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: ukraine,
    origin: "Ukraine",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: ksa,
    origin: "Saudi Arabia",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: camboda,
    origin: "Cambodia",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: brazil,
    origin: "Brazil",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: french,
    origin: "France",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: german,
    origin: "Germany",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: iran,
    origin: "Iran",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: italy,
    origin: "Italy",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: japan,
    origin: "Japan",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: mandar,
    origin: "Mandarin",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: philip,
    origin: "Philippines",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: russsia,
    origin: "Russia",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: spain,
    origin: "Spain",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: thailand,
    origin: "Thailand",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
  {
    imgUrl: vietnam,
    origin: "Vietnam",
    tutorCount: Math.floor(Math.random() * 100) + 1,
  },
];

interface isHome {
  isHome: boolean;
}

const TutorsOrigin: React.FC<isHome> = ({ isHome }) => {
  return (
    <section
      className={`flex flex-col gap-y-5 xl:gap-y-12 h-auto ${
        isHome ? "lg:pt-[100px] pt-10 pb-5 lg:pb-10 xl:pb-20" : "pt-10 pb-8"
      } items-center w-full`}
    >
      {isHome && (
        <div className="flex flex-col gap-y-4 items-center text-center px-4">
          <Heading
            Variant="h4"
            Txt={`Learn languages online with the world's best tutors`}
            className="common-heading"
          />
          <Paragraph
            className="common-sub-heading"
            Txt={"Tutors from all over the world offer online language lessons"}
          />
        </div>
      )}
      <Marquee direction="left">
        <div
          {...(!isAdminRoute && {
            "data-aos": "fade-up",
            "data-aos-delay": "100",
          })}
          className="flex flex-wrap items-center justify-between xl:justify-center gap-4 xl:gap-y-6 xl:gap-x-8 px-4 sm:px-6 md:px-[36px] py-6 w-full"
        >
          {tutorsOriginArr.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center  max-w-[220px] sm:w-auto px-4 py-2 border border-alt-border rounded-xl"
            >
              <Image
                Src={item.imgUrl}
                Alt="not found"
                className="h-[30px] md:h-[40px] xl:h-[60px] w-[30px] md:w-[40px] xl:w-[60px] object-cover rounded-full mr-3"
              />
              <div className="flex flex-col gap-y-1">
                <Heading
                  className="text-sm xl:text-lg text-primary-gray font-[600]"
                  Txt={item.origin}
                />
                <Heading
                  className="text-xs xl:text-sm text-primary-gray font-normal"
                  Txt={`${item.tutorCount} + Tutors`}
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TutorsOrigin;
