/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

import Image from "../../Tags/Image/Image";
import { useGetFindTutorsQuery } from "../../../redux/Slices/cmsSlice";
import Loader from "../../Loader/Loader";


const SyntaxMaster = (data: any) => {
  // Call the query hook to fetch the tutor data
  const {error, isLoading } = useGetFindTutorsQuery();

  // Handle loading state
  if (isLoading) return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  // Handle error state
  if (error) return <div>Error loading tutors!</div>;

  // Check if data is available before mapping over it
  if (!data || data.length === 0) {
    return <div>No tutors available.</div>;
  }

  const masterData = data?.data

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="100"
      className="h-auto w-auto container py-8 xl:py-[120px] "
    >
      <div className="h-auto w-auto flex flex-col gap-y-[30px]  lg:gap-y-[70px]  bg-rgba-gray px-5 xl:px-[170px] rounded-3xl xl:rounded-[100px] py-8 xl:py-20 ">
        <div className=" flex flex-col  gap-y-4  items-center">
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
        <div className="flex items-center justify-between  flex-col xl:flex-row gap-y-10 px-0 xl:gap-x-[72px] ">
          {masterData.map((item: any, idx: any) => {
            return (
              <div
                key={idx}
                className="flex items-center flex-col gap-x-0 lx:gap-y-6"
              >
                <Image
                  Src={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}${
                    item.image_url
                  }`}
                  Alt="not found"
                  className=" w-20 h-20 object-cover mb-5"
                />
                <div className="flex items-center flex-col gap-y-4">
                  <Heading
                    className=" text-2xl text-primary-gray font-[600] "
                    Txt={item.title}
                  />
                  <Paragraph
                    className=" text-base text-center text-primary-gray font-normal max-w-[239px] "
                    Txt={item.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SyntaxMaster;
