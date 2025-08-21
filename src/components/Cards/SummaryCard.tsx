import { useParams } from "react-router-dom";
import Heading from "../Tags/Heading/Heading";
import { teacherDetials } from "../StaticData/StaticData";
import Image from "../Tags/Image/Image";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { Lessons } from "../SvgContainer/SVgContainer";

const SummaryCard = () => {
  const { id } = useParams();

  const tutorId = id ? Number(id) : undefined;

  const activeTutor = teacherDetials.find(tutor => tutor.id === tutorId);

  return (
    <div className=" h-auto max-h-[422px] w-auto p-8 3xl:min-w-[753px] bg-primary-blue rounded-[12px] border-[1px] border-solid border-s-secondry-gray flex flex-col gap-y-8   ">
      <Heading
        Txt={`Booking summary`}
        className="text-lg xl:text-2xl text-white font-[600] "
      />
      <div className="flex flex-row gap-x-4 items-center ">
        <Image
          Src={activeTutor?.bgImgUrl ?? "/"}
          className="h-15 lg:h-20 w-15 lg:w-20 rounded-full object-cover "
          Alt="not found"
        />
        <div className="flex flex-col gap-y-5 ">
          <div className="flex flex-row gap-x-4 ">
            <Heading
              Variant="h4"
              Txt={activeTutor?.tutorName}
              className="text-lg lg:text-2xl text-white font-[600]"
            />
            <Image
              Src={activeTutor?.countryFlagImgUrl ?? "/"}
              className="h-8 w-8 rounded-full  "
              Alt="not found"
            />
          </div>
          <Paragraph
            className="text-lg text-white font-normal "
            Txt={`⭐${activeTutor?.ratingCount} (${activeTutor?.reviewCount} reviews)`}
          />
        </div>
      </div>
      <hr className="h-[1px] border-t-1 border-solid border-secondry-gray " />
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-row gap-x-3 lg:gap-x-10 ">
          <div className="flex flex-row gap-x-2 items-center ">
            <Lessons />
            <Paragraph
              className="text-white font-normal text-sm lg:text-base "
              Txt={`Lesson Type :  ${activeTutor?.lessonsType}`}
            />
          </div>
          <div className="flex flex-row gap-x-2 items-center ">
            <Lessons />
            <Paragraph
              className="text-white font-normal text-sm lg:text-base "
              Txt={`Date :  Today`}
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center ">
          <Lessons />
          <Paragraph
            className="text-white font-normal text-base "
            Txt={`Time : ${`9:00 Am`}`}
          />
        </div>
        <hr className="h-[1px] border-t-1 border-solid border-secondry-gray " />
        <div className="flex flex-row w-full items-center justify-between ">
          <Paragraph
            className="text-white font-normal text-base "
            Txt={`Total`}
          />
          <div className="flex flex-col gap-y-1 items-end  ">
            <Heading
              Variant="h5"
              className="text-white font-normal text-base "
              Txt={`$${activeTutor?.hourlyRate}`}
            />
            <Paragraph
              className="text-white font-normal text-base "
              Txt={`50 Min`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

