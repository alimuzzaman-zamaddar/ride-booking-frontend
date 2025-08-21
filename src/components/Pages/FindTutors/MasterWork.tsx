/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";


const MasterWork = (data: any) => {
  // console.log(data?.data?.howLessonWorks, "from master works");
  const lessonsFeatureArr = data?.data?.howLessonWorks;
  return (
    <section className="flex flex-col gap-y-10 h-auto w-auto py-6 xl:py-[120px] container ">
      <div className="flex flex-col gap-y-10 max-w-[1070px] ">
        <div className="flex flex-col gap-y-[14px] ">
          <Heading
            className="text-2xl lg:text-[32px] leading-[150%] font-bold text-primary-gray  "
            Txt={`How do online English lessons with Syntax Master work?`}
          />
          <Paragraph
            className="text-base lg:text-lg font-normal leading-[150%] text-primary-gray max-w-[520px] "
            Txt={`How do online English lessons with Syntax Master work?`}
          />
        </div>
        <hr
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full border-t border-solid border-secondry-gray "
        />
      </div>
      <div className="relative w-full max-w-[1070px] flex flex-col gap-y-6  ">
        {lessonsFeatureArr.map((item : any, idx: any) => {
          return (
            <div className="flex flex-col gap-y-6 ">
              <div className="flex flex-col gap-y-4 ">
                <Heading
                  className="text-xl lg:text-2xl text-primary-gray leading-[150%] font-bold "
                  Txt={item.title}
                />
                <Paragraph
                  Txt={item.description}
                  className="text-sm lg:text-base text-primary-gray leading-[150%] font-normal  "
                />
              </div>
              {idx < lessonsFeatureArr.length - 1 && (
                <hr
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-full border-t border-solid h-[1px] border-secondry-gray "
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MasterWork;
