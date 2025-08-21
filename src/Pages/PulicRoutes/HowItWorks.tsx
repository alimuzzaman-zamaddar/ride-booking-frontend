/* eslint-disable @typescript-eslint/no-explicit-any */
const HowItWorks = (data: any) => {
  console.log(data?.data, "from how to work");
  console.log(data?.data?.[0]?.title, "from how to work");

  return (
    <section className="py-10 lg:py-20 max-w-[1428px] mx-auto">
      <div className="text-center mb-8 lg:mb-16">
        <h2 className="text-2xl lg:text-[32px] text-primary-black font-bold mb-2">
          Here's how it works
        </h2>
        <p className="text-alt-gray text-sm lg:text-base">
          Curious about what your learning journey will look like?
        </p>
      </div>

      <div className="flex flex-col gap-10 px-4">
        {/* 1. Discover Your Ideal Tutor */}
        <div className="max-w-[1000px] flex flex-col md:flex-row gap-5 md:gap-20 bg-[#F8E9FB] rounded-xl overflow-hidden">
          <div className="w-full md:w-[45%] p-5 md:p-10  bg-white rounded-xl border border-alt-border">
            <img
              src={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}/${
                data?.data?.[0]?.image_url
              }`}
              alt="Discover Tutor"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-[55%] flex justify-center items-center p-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-black mb-3">
                {data?.data?.[0]?.title}
              </h3>
              <p className="text-alt-gray text-sm lg:text-base md:pr-10">
                {data?.data?.[0]?.description}
              </p>
            </div>
          </div>
        </div>

        {/* 2. Flexible Scheduling */}
        <div className="max-w-[1000px] xl:ml-[200px] gap-5 md:gap-20 flex flex-col md:flex-row bg-[#E6F0FF] rounded-xl overflow-hidden">
          <div className="w-full md:w-[45%] p-5 md:p-10  bg-white rounded-xl border border-alt-border">
            <img
              src={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}/${
                data?.data?.[1]?.image_url
              }`}
              alt="Flexible Scheduling"
              className="rounded-xl"
            />
          </div>
          <div className="w-full  md:w-[55%] flex items-center p-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-black md:mb-3">
                {data?.data?.[1]?.title}
              </h3>
              <p className="text-alt-gray text-sm lg:text-base pr-10">
                {data?.data?.[1]?.description}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Interactive Classroom */}
        <div className="xl:ml-[400px] max-w-[1000px] gap-5 md:gap-20 flex flex-col md:flex-row bg-[#E9E9FF] rounded-xl overflow-hidden">
          <div className="w-full md:w-[45%] p-5 md:p-10 bg-white rounded-xl border border-alt-border">
            <img
              src={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}/${
                data?.data?.[2]?.image_url
              }`}
              alt="Interactive Classroom"
              className="rounded-xl"
            />
          </div>
          <div className="w-full  md:w-[55%] flex items-center p-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-black mb-3">
                {data?.data?.[2]?.title}
              </h3>
              <p className="text-alt-gray text-sm lg:text-base md:pr-10">
                {data?.data?.[2]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
