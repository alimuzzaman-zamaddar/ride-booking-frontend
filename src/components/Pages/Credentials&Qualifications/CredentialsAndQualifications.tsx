import { useParams } from "react-router-dom";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import { teacherDetials } from "../../StaticData/StaticData";
import { DownloadIcon, EyeIcon, VerifiedSvg } from "../../SvgContainer/SVgContainer";

const CredentialsAndQualifications = () => {
  const { id } = useParams();
  const tutorId = id ? Number(id) : undefined;
  const activeTutor = teacherDetials.find(tutor => tutor.id === tutorId);

  const teacherDetailsArr: string[] = [
    "8+ years of teaching experience",
    "Specialized in Business English and IELTS preparation",
    "Taught 2,450+ lessons on the platform",
    "4.9/5 average student rating",
    "Worked with students from 30+ countries",
    "Fluent in English (Native), Spanish, and French",
  ];

  return (
    <main className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-3 ">
        <Heading
          Txt={`Credentials & Qualifications`}
          className=" font-[600] text-2xl xl:text-[32px] text-secondary-black"
        />
        <Paragraph
          Txt={`Credentials & Qualifications`}
          className=" font-normal text-sm lg:text-base  text-primary-gray"
        />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-x-10  ">
        <div className="flex flex-col">
          <div className=" h-auto w-auto bg-white border-[1px] border-solid p-4 xl:p-8 border-secondry-gray rounded-[12px] flex flex-col gap-y-4 ">
            <Heading
              Txt={`Certificates & Degrees`}
              className=" font-[600] text-lg lg:text-2xl text-secondary-black"
            />
            {activeTutor?.educationDeatisArr.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col lg:flex-row gap-x-[84px] h-auto w-auto bg-white p-6 rounded-[12px] border-[1px] border-solid border-secondry-gray  "
                >
                  <div className="flex flex-col gap-y-4 mb-5">
                    <div className="flex flex-col gap-y-1">
                      <Heading
                        Txt={item.qulifiactionName}
                        className="text-black text-base font-[600]"
                      />
                      <Paragraph
                        Txt={item.qulifiactionName}
                        className="text-black text-sm font-normal"
                      />
                    </div>
                    <div className="flex flex-row gap-4 ">
                      <div className="-auto w-auto bg-white  px-[12px] lg:px-[22.5px] cursor-pointer flex flex-row gap-x-3 items-center py-1 lg:py-2 rounded-[12px] border-[1px] border-solid border-secondry-gray ">
                        <EyeIcon />
                        <Paragraph
                          className="text-black text-xs lg:text-base font-normal"
                          Txt={`View`}
                        />
                      </div>
                      <div className="-auto w-auto bg-white px-[22.5px] cursor-pointer flex flex-row gap-x-3 items-center  py-1 lg:py-2 rounded-[12px] border-[1px] border-solid border-secondry-gray ">
                        <DownloadIcon />
                        <Paragraph
                          className="text-black text-xs lg:text-basefont-normal"
                          Txt={`Download Pdf`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" p-2 bg-[#DCFCE7] max-h-10 rounded-[12px] flex flex-row items-center h-auto w-auto  gap-x-2  ">
                    <VerifiedSvg />
                    <Paragraph
                      className="text-base text-[#3B7E4F]  font-[600] "
                      Txt={`Verified`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-auto w-auto bg-white mt-5 p-4 lg:p-8 rounded-[12px] border-[1px] border-solid border-secondry-gray flex flex-col gap-y-8  ">
          <Heading
            Txt={`Why I'm Qualified to Teach`}
            className=" font-[600] text-xl lg:text-2xl text-secondary-black"
          />
          <ul className="flex pl-6 flex-col gap-y-4 ">
            {teacherDetailsArr.map((item, idx) => {
              return (
                <li
                  className="text-sm lg:text-base font-normal text-black list-disc list-group-item-primary "
                  key={idx}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="h-auto w-auto  p-8 rounded-[12px] border-[1px] border-solid border-secondry-gray  bg-[#EFF6FF] flex flex-col gap-y-6  ">
            <div className="flex flex-row  gap-x-[137px] ">
              <div className="flex flex-col gap-y-1 ">
                <Paragraph
                  Txt={`Total Lessons`}
                  className=" font-normal text-xs text-primary-blue"
                />
                <Heading
                  Txt={activeTutor?.lessonsCount}
                  className=" font-[600] text-2xl text-secondary-black"
                />
              </div>
              <div className="flex flex-col gap-y-1 ">
                <Paragraph
                  Txt={`Student Rating`}
                  className=" font-normal text-xs text-primary-blue"
                />
                <Heading
                  Txt={`${activeTutor?.ratingCount.toFixed(1)}/5`}
                  className=" font-[600] text-2xl text-secondary-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CredentialsAndQualifications;
