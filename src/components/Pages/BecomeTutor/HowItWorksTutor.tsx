/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBecomeTutorsQuery } from "../../../redux/Slices/cmsSlice";
import Loader from "../../Loader/Loader";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

interface HowWorksItem {
  title: string;
  description: string;
}

const HowItWorksTutor = () => {

  
  const {data, error, isLoading } = useGetBecomeTutorsQuery();

  // Handle loading state
  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  // Handle error state
  if (error) return <div>Error loading tutors!</div>;

  // Check if data is available before mapping over it
  if (!data || data.length === 0) {
    return <div>No tutors available.</div>;
  }

  console.log(data?.data?.howWorks, "from how it works");




  return (
    <section className="h-auto w-auto flex flex-col gap-y-12 container py-[60px] xl:py-[120px]   ">
      <div className=" flex flex-col gap-y-4 items-center">
        <Heading
          Variant="h4"
          Txt={`Here's how it works`}
          className="common-heading "
        />
        <Paragraph
          className="common-sub-heading"
          Txt={"Curious about what your learning journey will look like?"}
        />
      </div>
      <div className=" flex flex-col xl:flex-row gap-y-4 gap-x-[30px] ">
        {data?.data?.howWorks.map((item: HowWorksItem, idx: number) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              key={idx}
              className="h-auto w-auto p-8 bg-white border-[1px] border-solid rounded-[12px] border-secondary-white shadow-md flex flex-col gap-y-6   "
            >
              <div className="flex flex-col gap-y-5 ">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="h-[50px] text-white text-[32px] font-bold leading-[75%] flex items-center justify-center w-[50px] p-4 rounded-[8px] bg-primary-blue "
                >
                  {idx + 1}
                </div>
                <div className="flex flex-col gap-y-4 ">
                  <Heading
                    Txt={item.title}
                    className=" text-2xl  font-bold text-secondary-black "
                  />
                  <div
                    data-aos="fade-up"
                    className="max-w-[629px] text-lg text-alt-gray font-normal leading-[150%]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksTutor;
