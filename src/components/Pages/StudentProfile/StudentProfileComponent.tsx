import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import silkGirl from "../../../assets/images/silk-hair-girl.png";
import Image from "../../Tags/Image/Image";
import {
  Academice,
  Cetificate,
  Globe,
} from "../../SvgContainer/SVgContainer";

const learningGoals: string[] = [
  "Master TypeScript for safer and scalable React applications",
  "Understand advanced React patterns (Hooks, Context, Render Props, etc.)",
  "Deepen understanding of Node.js event loop and performance optimization",
  "Learn MongoDB aggregation framework for complex queries",
  "Explore Next.js for SSR and better SEO handling",
];

const Interests: string[] = [
  "Programming",
  "Travelling",
  "Biking",
  "Riding",
  "Programming",
  "Travelling",
  "Biking",
  "Riding",
];

const StudentProfileComponent = () => {
  return (
    <section className="h-auto w-auto container flex flex-col  gap-y-8 ">
      <div className="h-auto w-auto bg-white p-8 border-[1px] border-solid rounded-[12px] border-secondary-white flex flex-row gap-x-[100px] items-center ">
        <div className="flex flex-row gap-x-6 ">
          <Image
            Src={silkGirl}
            className="w-[120px] h-[120px] rounded-xl"
            Alt="not found"
          />
          <div className="flex flex-col gap-y-6 ">
            <Heading
              Txt={`John Doe`}
              className="text-secondary-black font-[600] text-[32px] "
            />
            <div className="flex items-center fle-row gap-x-6 ">
              <div className="flex flex-row items-center gap-2 ">
                <Cetificate />
                <Paragraph
                  className="text-base font-[600] text-secondary-black "
                  Txt={`Since November 2024`}
                />
              </div>
              <div className="flex flex-row items-center gap-2 ">
                <Academice />
                <Paragraph
                  className="text-base font-[600] text-secondary-black "
                  Txt={`Intermediate (B2`}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <Globe />
              <Paragraph
                className="text-base font-[600] text-secondary-black "
                Txt={`Toronto, Canada`}
              />
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <Globe />
              <Paragraph
                className="text-base font-[600] text-secondary-black "
                Txt={`Speaks: English (Intermediate), Spanish (Native), French (Basic)`}
              />
            </div>
            <div className="flex flex-col gap-y-4 ">
              <Heading
                Txt={`Current Learning Goals`}
                className="text-2xl font-[600] text-secondary-black leading-[150%] "
              />
              <div className="flex flex-row gap-3 flex-wrap">
                {learningGoals.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="px-4 py-2.5 bg-[#DCFCE7] text-base font-[600] rounded-[12px] text-[#15805D] "
                    >
                      {" "}
                      {item}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 relative h-auto w-auto min-w-[347px] bg-primary-blue rounded-[12px] flex flex-col gap-y-6   ">
          <Heading
            Txt={`Connect with John`}
            className="text-white text-2xl font-[600] "
          />
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-row justify-between">
                <Paragraph
                  className="text-secondary-white text-base font-normal "
                  Txt={`Lesson Complete:`}
                />
                <Paragraph
                  className="text-secondary-white text-base font-normal "
                  Txt={`60 Minutes`}
                />
              </div>
              <div className="flex flex-row justify-between">
                <Paragraph
                  className="text-white text-base font-normal "
                  Txt={`Budget Range:`}
                />
                <Paragraph
                  className="text-white text-base font-normal "
                  Txt={`$20-$30 per hour`}
                />
              </div>
              <div className="flex flex-row justify-between">
                <Paragraph
                  className="text-white text-base font-normal "
                  Txt={`Learning Style:`}
                />
                <Paragraph
                  className="text-white text-base font-normal "
                  Txt={`Interactive`}
                />
              </div>
            </div>
          </div>
          <Button
            Txt={`Send Message`}
            className="!w-full py-3.5 bg-secondary-blue rounded-[12px] px-20 text-lg font-[600] text-white cursor-pointer border-[1px] border-secondary-blue hover:border-solid ease-in-out duration-300 hover:border-secondary-blue hover:bg-transparent hover:text-secondary-blue"
          />
          <hr className="border-t border-solid border-secondary-white " />
          <ul className="flex flex-col gap-y-2 ">
            <li>
              <Paragraph
                className="text-sm font-normal text-secondary-white"
                Txt={`✓ Active learner since November 2024`}
              />
            </li>
            <li>
              <Paragraph
                className="text-sm font-normal text-secondary-white"
                Txt={`✓ 22 lessons completed`}
              />
            </li>
            <li>
              <Paragraph
                className="text-sm font-normal text-secondary-white"
                Txt={`✓ Motivated and consistent`}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="h-auto w-auto bg-white p-8 border-[1px] border-solid rounded-[12px] border-secondary-white flex flex-col gap-y-5 ">
        <Heading
          Txt={`About John Doe`}
          className="text-secondary-black font-[600] text-[32px] "
        />
        <Paragraph
          className="text-base font-normal text-primary-gray  "
          Txt={`Hi! I'm John, a marketing manager at a tech company in Toronto. I'm looking to improve my English communication skills, especially for business presentations and client meetings.`}
        />
        <Paragraph
          className="text-base font-normal text-primary-gray  "
          Txt={`I've been learning English for 3 years and have made good progress, but I want to take my skills to the next level. My main goals are to speak more confidently in meetings, improve my presentation skills, and expand my business vocabulary. `}
        />
        <Paragraph
          className="text-base font-normal text-primary-gray  "
          Txt={`I'm particularly interested in: - Business English and professional communication - Presentation and public speaking skills - Interview preparation techniques - Expanding industry-specific vocabulary`}
        />
      </div>
      <div className="flex flex-row  gap-x-8  ">
        <div className="h-auto 3xl:w-[638px] w-auto bg-white p-8 border-[1px] border-solid rounded-[12px] border-secondary-white flex flex-col gap-y-5 ">
          <Heading
            Txt={`Interests`}
            className="text-secondary-black font-[600] text-xl "
          />
          <div className="grid grid-cols-4 gap-[15px]  " >
            {
              Interests.map((item, idx) => {
                return <div key={idx} className="px-3 flex items-center justify-center rounded-[12px] py-1 bg-[#DEEEFF] text-sm font-[600] text-secondary-black ">
                  {item}
                </div>;
              })
            }

          </div>
        </div>
        <div className="h-auto w-auto bg-white p-8 border-[1px] border-solid rounded-[12px] border-secondary-white flex flex-col gap-y-5 ">
          <Heading
            Txt={`Learning Goals`}
            className="text-secondary-black font-[600] text-xl "
          />
          <Paragraph
            className="text-base font-normal text-primary-gray  "
            Txt={`Improve business presentation skills`}
          />
          <Paragraph
            className="text-base font-normal text-primary-gray  "
            Txt={`Increase confidence in client meetings `}
          />
          <Paragraph
            className="text-base font-normal text-primary-gray  "
            Txt={`Expand professional vocabulary Prepare`}
          />
          <Paragraph
            className="text-base font-normal text-primary-gray  "
            Txt={`Prepare for upcoming promotion interview`}
          />
        </div>
      </div>
    </section>
  );
};

export default StudentProfileComponent;
