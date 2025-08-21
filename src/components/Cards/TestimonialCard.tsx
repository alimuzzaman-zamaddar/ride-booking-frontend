import Heading from "../Tags/Heading/Heading";
import Image from "../Tags/Image/Image";
import Paragraph from "../Tags/Paragraph/Paragraph";


interface testimonialCardSchema {
  authorName: string;
  location: string;
  bgImgUrl: string;
  descreption: string;
  ratingCount: number;
}

const TestimonialCard: React.FC<testimonialCardSchema> = ({
  authorName,
  location,
  bgImgUrl,
  descreption,
  ratingCount,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="h-auto w-auto shadow-md bg-white rounded-[12px] border-[1px] border-solid border-secondry-gray p-6 xl:p-10 flex flex-col gap-y-4  "
    >
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => {
          const starNumber = i + 1;
          if (starNumber <= Math.floor(ratingCount)) {
            return (
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                key={i}
                className=" text-lg text-yellow-500"
              >
                ★
              </span>
            );
          } else if (
            starNumber === Math.ceil(ratingCount) &&
            ratingCount % 1 !== 0
          ) {
            return (
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                key={i}
                className="  text-lg text-yellow-500"
              >
                ☆
              </span>
            );
          } else {
            return (
              <span
                data-aos="fade-up"
                data-aos-delay="100"
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
        className="text-base font-normal leading-[150%] text-primary-gray "
        Txt={descreption}
      />
      <div className="flex flex-row gap-x-3 ">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-[53px] h-[53px] flex items-center justify-center border-[1px] border-solid border-light-blue rounded-full "
        >
          <Image
            Src={bgImgUrl}
            className="w-[47px] rounded-full h-[47px] object-cover "
            Alt="not found"
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <Heading
            Txt={authorName}
            className="text-lg text-black leading-[150%] font-[600] "
          />
          <Paragraph
            Txt={location}
            className="text-sm text-primary-gray leading-[150%] font-normal "
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
