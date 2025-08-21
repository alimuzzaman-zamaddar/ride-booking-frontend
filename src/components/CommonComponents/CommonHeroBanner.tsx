import rating from "../../assets/images/rating.png";

interface commonHeroBannerSchema {
  title: string;
  higlightedTxt?: string;
  videoLink: string;
  descreption: string;
  trendingSubject?: {
    label: string;
    id: number;
  }[];
  reviewCount?: number;
  variant: "home" | "become-tutor" | "find-tutor";
  communityCont?: number | string;
  activeMember?: number;
  authenticCount?: number;
}

import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import {
  CommunitySvg,
  LocationSvg,
  RewardIcon,
  SearchIconSmall,
  SearchIconSvg,
  VerifiedIcon,
} from "../SvgContainer/SVgContainer";
import type React from "react";
import Button from "../Tags/Button/Button";

const CommonHeroBanner: React.FC<commonHeroBannerSchema> = ({
  title,
  higlightedTxt,
  videoLink,
  descreption,
  trendingSubject,
  variant,
  authenticCount,
  activeMember,
  communityCont,
}) => {
  return (
    <div className="relative w-full h-[700px] sm:h-[600px] md:h-[700px] flex flex-col justify-center text-white">
      <video
        src={videoLink}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[1]"></div>

      <div className="flex flex-col gap-y-[60px] container max-w-full sm:max-w-[600px] md:max-w-[700px] px-4 sm:px-6 md:px-0 z-40">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col items-start gap-y-2">
              {variant === "become-tutor" && (
                <Heading
                  Txt={higlightedTxt}
                  className="bg-light-pink text-lg font-normal text-white rounded-[8px] py-2.5 px-4"
                />
              )}
              <Heading
                className="text-white text-[30px] sm:text-[56px] md:text-[64px] font-bold leading-tight"
                Txt={title}
              />
              {variant === "home" && (
                <Heading
                  Txt={"Expert Tutors"}
                  className="bg-[#6A307D] text-[22px] sm:text-[56px] md:text-[64px] font-bold text-white rounded-[8px] px-2 py-1"
                />
              )}
            </div>
            <Paragraph
              Txt={descreption}
              className="text-secondary-white text-base sm:text-md font-normal lg:max-w-[728px] max-w-full"
            />
          </div>

          <div className="flex flex-col gap-y-3">
            {variant === "home" && (
              <div className="relative max-w-full sm:max-w-[610px]">
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="text"
                  placeholder="What would you like to learn"
                  className="bg-white outline-none p-2 xl:py-2.5 rounded-[8px] border border-solid md:text-lg text-sm pl-12 pr-4 text-alt-gray w-full"
                />
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="absolute top-1/2 left-4 -translate-y-1/2"
                >
                  <SearchIconSvg />
                </div>
              </div>
            )}

            {variant === "find-tutor" && (
              <div className="bg-white flex flex-col sm:flex-row gap-4 items-center rounded-[12px] py-2 xl:py-4 px-3 xl:px-5 border border-solid border-alt-gray w-full max-w-full sm:max-w-[657px]">
                <div className="relative flex-1 w-full sm:w-auto">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIconSmall />
                  </div>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="100"
                    type="text"
                    placeholder="What would you like to learn"
                    className="outline-none py-[5px] xl:py-[16.5px] rounded-[8px] border border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-full"
                  />
                </div>

                <div className="relative flex-1 w-full sm:w-auto">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <LocationSvg />
                  </div>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="100"
                    type="text"
                    placeholder="Location"
                    className="outline-none py-[5px] xl:py-[16.5px] rounded-[8px] border border-solid border-secondry-gray text-sm pl-[36px] pr-4 text-text-gray w-full"
                  />
                </div>

                <div className="flex-shrink-0 w-full sm:w-auto">
                  <Button
                    Txt="Find Tutor"
                    className="primary-btn text-sm xl:text-lg !px-0 !py-2 lg:!py-[13.5px] lg:!px-[37.5px] w-full sm:w-auto"
                  />
                </div>
              </div>
            )}

            {variant === "become-tutor" && (
              <div className="bg-white relative grid grid-cols-2 gap-4 items-center rounded-[12px] px-2 py-2 xl:py-4 xl:px-5 border border-solid border-alt-gray w-full max-w-full sm:max-w-[648px]">
                <Button
                  Txt="Apply as a Tutor"
                  className="primary-btn text-sm xl:text-lg w-full py-[6px] xl:!py-[13.5px]"
                />
                <Button
                  Txt="How Its Work"
                  className="reverse-primary-btn text-sm xl:text-lg w-full py-[6px]  xl:!py-[13.5px]"
                />
              </div>
            )}

            <div className="flex flex-row flex-wrap gap-x-3 items-center font-normal md:justify-start justify-center">
              {variant === "home" && (
                <Heading
                  Txt={"Trending:"}
                  className="text-lg text-white font-[600]"
                />
              )}
              {variant !== "become-tutor" && (
                <ul className="flex flex-row flex-wrap gap-2 md:justify-start justify-center">
                  {trendingSubject?.map(item => {
                    return (
                      <li data-aos="fade-up" data-aos-delay="100" key={item.id}>
                        <div className="text-sm hover:bg-transparent ease-in-out duration-300 hover:text-white hover:border-white border border-solid cursor-pointer text-primary-gray font-normal py-1 px-2 bg-white rounded-[4px]">
                          {item.label}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>

        {variant === "home" && (
          <div className="w-full flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-4.5">
              <Heading
                Variant="h5"
                Txt={"Excellent"}
                className="text-lg text-white font-normal"
              />
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                src={rating}
                alt="not found"
                className="w-[104px] h-5 object-cover"
              />
            </div>
            <Heading
              Variant="h5"
              Txt={"4.5 out of 5 based on 1663 reviews on trust pilot"}
              className="text-base text-white"
            />
          </div>
        )}

        {variant !== "home" && (
          <div className="w-full flex flex-col sm:flex-row gap-x-0 sm:gap-x-6 gap-y-4 sm:gap-y-0">
            <div className="flex flex-row gap-x-3 items-center">
              <CommunitySvg />
              <Paragraph
                className="text-lg text-white font-normal"
                Txt={`${
                  variant === "find-tutor"
                    ? `${communityCont}+ Expert Tutors`
                    : `$${communityCont} Hourly Rate`
                }`}
              />
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <RewardIcon />
              <Paragraph
                className="text-lg text-white font-normal"
                Txt={`${
                  variant === "find-tutor"
                    ? `${activeMember} Average Rating`
                    : `${activeMember}k+ Active Students`
                }`}
              />
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <VerifiedIcon />
              <Paragraph
                className="text-lg text-white font-normal"
                Txt={`${authenticCount}% ${
                  variant === "find-tutor" ? "Verified" : "Flexibility"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHeroBanner;
