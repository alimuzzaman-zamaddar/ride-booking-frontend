import { useRef, useState } from "react";
import Button from "../Tags/Button/Button";
import Image from "../Tags/Image/Image";

import {
  BookMarkSvg,
  HeartSvg,
  LocationSvgIcon,
  MsgSvgPlane,
  VideoIcon,
} from "../SvgContainer/SVgContainer";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useNavigate } from "react-router-dom";

interface TeacherDetailsSchema {
  id: number;
  tutorName: string;
  bgImgUrl: string;
  designation: string;
  ratingCount: number;
  reviewCount: number;
  lessonsCount: number;
  hourlyRate: number;
  trialRate: number;
  shortDescreption: string;
  location: string;
  languagePreferences: string;
  respondTime: number;
  expertise: string[];
  isAvailable: boolean;
  introductionVideo: string;
  countryFlagImgUrl: string;
}

const TeacherCard: React.FC<TeacherDetailsSchema> = ({
  id,
  tutorName,
  bgImgUrl,
  designation,
  ratingCount,
  reviewCount,
  lessonsCount,
  hourlyRate,
  trialRate,
  shortDescreption,
  location,
  languagePreferences,
  respondTime,
  expertise,
  isAvailable,
  introductionVideo,
  countryFlagImgUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/dashboard");
  const navigate = useNavigate();
  return (
    <div data-name={id} className="flex flex-col 2xl:flex-row gap-5 xl:gap-x-10 relative ">
      <div
        {...(!isAdminRoute && {
          "data-aos": "fade-up",
          "data-aos-delay": "100",
        })}
        className="flex h-full w-full p-4 xl:p-8  border-[1px] border-solid border-secondry-gray rounded-[12px] flex-col 2xl:flex-row gap-x-4  "
      >
        <Image
          Src={bgImgUrl}
          className="w-full xl:h-[180px] xl:w-[180px] object-cover rounded-[4px] "
          Alt="not found"
        />
        <div className="flex flex-col 2xl:flex-row gap-x-8 ">
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex flex-row items-center gap-x-4 mt-5 xl:mt-0">
                <Heading
                  Variant="h4"
                  Txt={tutorName}
                  className=" text-[24px] xl:text-[32px] font-bold text-secondary-black"
                />
                <Image
                  Src={countryFlagImgUrl}
                  className="w-8 h-8 object-cover rounded-full "
                  Alt="not found"
                />
              </div>
              <Heading
                Variant="h6"
                Txt={designation}
                className="text-lg font-[600] text-secondary-black"
              />
            </div>
            <div className="flex flex-row items-center gap-x-2 ">
              <div className="flex">
                {Array.from({ length: ratingCount }, (_, i) => {
                  const starNumber = i + 1;
                  if (starNumber <= Math.floor(ratingCount)) {
                    return (
                      <span
                        {...(!isAdminRoute && {
                          "data-aos": "fade-up",
                          "data-aos-delay": "100",
                        })}
                        key={i}
                        className=" text-lg text-yellow-500"
                      >
                        ★
                      </span>
                    );
                  } else if (
                    starNumber === Math.ceil(ratingCount) &&
                    3 % 1 !== 0
                  ) {
                    return (
                      <span
                        {...(!isAdminRoute && {
                          "data-aos": "fade-up",
                          "data-aos-delay": "100",
                        })}
                        key={i}
                        className="  text-lg text-yellow-500"
                      >
                        ☆
                      </span>
                    );
                  } else {
                    return (
                      <span
                        {...(!isAdminRoute && {
                          "data-aos": "fade-up",
                          "data-aos-delay": "100",
                        })}
                        key={i}
                        className=" text-lg text-gray-400"
                      >
                        ★
                      </span>
                    );
                  }
                })}
              </div>
              <Paragraph
                className="text-sm font-normal text-secondary-black"
                Txt={`${Number(ratingCount).toFixed(
                  1
                )} (${reviewCount} reviews) • ${lessonsCount} lessons`}
              />
            </div>
            <Paragraph
              className="text-base font-normal max-w-[595px] text-primary-gray"
              Txt={shortDescreption}
            />
            <div className="flex items-center flex-row gap-x-4 ">
              <div className="flex  flex-wrap xl:flex-row items-center gap-2">
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="flex flex-row items-center gap-x-1"
                >
                  <LocationSvgIcon />
                  <Paragraph
                    className="text-base text-nowrap font-normal  text-primary-gray"
                    Txt={location}
                  />
                </div>
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="flex flex-row items-center gap-x-1"
                >
                  <LocationSvgIcon />
                  <Paragraph
                    className="text-base text-nowrap font-normal  text-primary-gray"
                    Txt={`Speaks:${languagePreferences}`}
                  />
                </div>
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="flex flex-row items-center gap-x-1"
                >
                  <LocationSvgIcon />
                  <Paragraph
                    className="text-base text-nowrap font-normal  text-primary-gray"
                    Txt={`Usually responds in ${respondTime}  hours`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 ">
              {expertise.map((item, idx) => {
                return (
                  <div
                    {...(!isAdminRoute && {
                      "data-aos": "fade-up",
                      "data-aos-delay": "100",
                    })}
                    key={idx}
                    className="bg-off-white rounded-[8px] text-base  font-normal text-shadow-black h-auto w-auto py-1.5 px-3 shadow-sm "
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <Paragraph
              Txt={isAvailable ? "Available today" : "Not Available today"}
              className={`text-sm font-[600] ${
                isAvailable ? "text-primary-green" : "text-red-400"
              } `}
            />
          </div>
          <div className="flex flex-col gap-y-5 xl:gap-y-[93px]">
            <div className="flex flex-row items-center gap-5  xl:flex-col gap-y-2 xl:items-end ">
              <div className="flex flex-row gap-x-4 items-center">
                <Heading
                  Variant="h4"
                  Txt={`$${hourlyRate}`}
                  className="text-[32px] font-bold text-secondary-black"
                />
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="h-auto w-auto cursor-pointer border-[1px] p-[6.54px]  border-solid border-secondry-gray rounded-[8px] "
                >
                  <HeartSvg />
                </div>
              </div>
              <Heading
                Variant="h6"
                Txt={`Per hour`}
                className="text-base font-normal text-secondary-black"
              />
              <div className="px-4 bg-light-pink rounded-[8px] py-1">
                <Heading
                  Variant="h6"
                  Txt={`Trail: $${trialRate}`}
                  className="text-base font-normal text-secondary-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2.5 ">
              <Button
                Txt={"Book Trail"}
                className="primary-btn text-sm py-2 xl:py-3 xl:text-lg flex justify-center items-center w-full"
              />
              <div className="flex flex-row gap-x-2.5 ">
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="h-auto w-auto cursor-pointer border-[1px] px-[34px] py-2.5 border-solid border-secondry-gray rounded-[8px] "
                >
                  <MsgSvgPlane />
                </div>
                <div
                  {...(!isAdminRoute && {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                  })}
                  className="h-auto cursor-pointer w-auto border-[1px] px-[34px] py-2.5 border-solid border-secondry-gray rounded-[8px] "
                >
                  <BookMarkSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 ">
        <div className="relative 2xl:w-[494px] h-[80%] rounded-[12px] overflow-hidden">
          {/* Thumbnail background image */}
          {!isPlaying && (
            <img
              src={bgImgUrl}
              alt="video thumbnail"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          )}

          <video
            ref={videoRef}
            src={introductionVideo}
            className={`w-full h-full object-cover rounded-[12px] z-10 relative ${
              !isPlaying ? "opacity-0" : "opacity-100"
            }`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
          />

          {!isPlaying && (
            <div
              {...(!isAdminRoute && {
                "data-aos": "fade-up",
                "data-aos-delay": "100",
              })}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
              onClick={handlePlayPause}
            >
              <VideoIcon />
            </div>
          )}
        </div>

        <Button
          onClick={() => {
            navigate(`/dashboard/tutors/${id}`);
          }}
          className="primary-btn text-sm py-2 xl:py-3 xl:text-lg flex justify-center items-center w-full"
          Txt={`View Full Schedule`}
        />
      </div>
    </div>
  );
};

export default TeacherCard;
