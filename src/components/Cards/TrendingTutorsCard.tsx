import type React from "react";
import Image from "../Tags/Image/Image";
import { FaArrowRightLong } from "react-icons/fa6";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useNavigate } from "react-router-dom";

interface terndingTutorsCardScheam {
  imgUrl: string;
  tutorName: string;
  redirectLink: string;
  language: string;
  experience: string;
  specialities: string;
  teachingSTyle: string;
  speaks: string;
  rating: number;
  totalLessons: number;
  from: string;
}

const TrendingTutorsCard: React.FC<terndingTutorsCardScheam> = ({
  imgUrl,
  tutorName,
  redirectLink,
  specialities,
}) => {
  const navigate = useNavigate();
  return (
    <div className="h-auto relative w-auto max-w-[383px] rounded-[4px] shadow-md bg-white ArrowSvgArrowSvg border-alt-gray ">
      <div className="relative rounded-[4px]">
        <Image
          Src={imgUrl}
          className="w-full rounded-[4px] h-[300px] xl:h-[412px] object-top object-cover "
          Alt="not found"
        />
        <div className="absolute bottom-0 left-0 flex  justify-between items-end w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_40%,rgba(48,48,48,0.68)_64.12%,#171212_86.32%)] p-6">
          <div className="">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-white text-2xl font-[600]  mb-3">{tutorName}</h3>
            </div>
            <Paragraph
              className="text-white text-lg font-[400] "
              Txt={specialities}
            />
          </div>
          <div className="">
            <div
              onClick={() => {
                navigate(redirectLink);
              }}
              data-aos="fade-up"
              data-aos-delay="100"
              className="cursor-pointer"
            >
              {/* <ArrowSvg /> */}
              <button className="h-6 w-6 xl:h-13 xl:w-13 rounded-full bg-primary-blue text-white text-lg xl:text-xl flex justify-center items-center">
                <FaArrowRightLong className="-rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col bg-white rounded-b-[12px] p-5 h-auto w-auto gap-y-[27px]">
        <div className="flex items-center flex-row justify-between">
          <Heading
            Txt={tutorName}
            Variant="h5"
            className="text-2xl font-bold"
          />
          <div
            onClick={() => {
              navigate(redirectLink);
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            className="cursor-pointer"
          >

            <button className="h-10 w-10 xl:h-18 xl:w-18 rounded-full bg-primary-blue text-white text-lg xl:text-2xl flex justify-center items-center">
              <FaArrowRightLong className="-rotate-45" />
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-y-2 xl:gap-y-4">
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="Language:"
            />
            <Paragraph
              className="text-[14px] xl:text-base font-normal text-[#200E25]"
              Txt={language}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="Teaching Style:"
            />
            <Paragraph
              className="text-[14px] xl:text-base  font-normal text-[#200E25]"
              Txt={teachingSTyle}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="Specialties:"
            />
            <Paragraph
              className="text-[14px] xl:text-base  font-normal text-[#200E25]"
              Txt={specialities}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="Experience:"
            />
            <Paragraph
              className="text-[14px] xl:text-base font-normal text-[#200E25]"
              Txt={experience}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="From:"
            />
            <Paragraph
              className="text-[14px] xl:text-base  font-normal text-[#200E25]"
              Txt={from}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-[16px] xl:text-lg font-[600] text-primary-gray"
              Txt="Speaks:"
            />
            <Paragraph
              className="text-[14px] xl:text-base  font-normal text-[#200E25]"
              Txt={speaks}
            />
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default TrendingTutorsCard;
