import { useState } from "react";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";

// import women from "../../../assets/images/tutors/women-1.jpg";
// import women2 from "../../../assets/images/tutors/women-2.jpg";
// import women3 from "../../../assets/images/tutors/women-3.jpg";
// import women4 from "../../../assets/images/tutors/women-4.jpg";
import TrendingTutorsCard from "../../Cards/TrendingTutorsCard";

import tuor1 from "../../../assets/teachers/Frame 2147227146.png"
import tuor2 from "../../../assets/teachers/image 2491.png"
import tuor3 from "../../../assets/teachers/image 2492.png"
import tuor4 from "../../../assets/teachers/image 2493.png"
import tuor5 from "../../../assets/teachers/image 2494.png"
import tuor6 from "../../../assets/teachers/image 2496 (1).png"
import tuor7 from "../../../assets/teachers/image 2496.png"
import tuor8 from "../../../assets/teachers/image 2497.png"
import { useGetAllTutorsQuery } from "../../../redux/Slices/cmsSlice";
import Loader from "../../Loader/Loader";


const trendingOption: string[] = [
  "All",
  "Art",
  "Music",
  "Chess",
  "Yoga",
  "Wrinting",
  "Martial Arts & Fitness",
];

interface terndingTutorsCardScheam {
  imgUrl: string;
  tutorName: string;
  redirectLink: string;
  language: string;
  experience: string;
  specialities: string;
  teachingSTyle: string;
  speaks: string;
  rating: number;
  totalLessons: number;
  from: string;
}

const trendingTutors: terndingTutorsCardScheam[] = [
  {
    imgUrl: tuor1,
    tutorName: "Maria Gonzalez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Spanish",
    experience: "8+ years",
    specialities: "DELE prep",
    teachingSTyle: "Friendly, interactive with real-life scenarios",
    speaks: "Spanish, English",
    rating: 4.9,
    totalLessons: 1200,
  },
  {
    imgUrl: tuor2,
    tutorName: "Sofia Alvarez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "French",
    experience: "5 years",
    specialities: " DELF preparation",
    teachingSTyle: "Engaging, focus on pronunciation",
    speaks: "French, English",
    rating: 4.8,
    totalLessons: 950,
  },
  {
    imgUrl: tuor3,
    tutorName: "Emma Johansson",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "German",
    experience: "7 years",
    specialities: "Business German",
    teachingSTyle: "Structured, goal-oriented",
    speaks: "German, English",
    rating: 4.7,
    totalLessons: 1023,
  },
  {
    imgUrl: tuor4,
    tutorName: "Isabella Rossi",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Italian",
    experience: "4 years",
    specialities: "CILS prep",
    teachingSTyle: "Casual, practice-focused",
    speaks: "Italian, English",
    rating: 4.6,
    totalLessons: 890,
  },
  {
    imgUrl: tuor5,
    tutorName: "Maria Gonzalez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Spanish",
    experience: "8+ years",
    specialities: "Spanish",
    teachingSTyle: "Friendly, interactive with real-life scenarios",
    speaks: "Spanish, English",
    rating: 4.9,
    totalLessons: 1200,
  },
  {
    imgUrl: tuor6,
    tutorName: "Sofia Alvarez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "French",
    experience: "5 years",
    specialities: "preparation",
    teachingSTyle: "Engaging, focus on pronunciation",
    speaks: "French, English",
    rating: 4.8,
    totalLessons: 950,
  },
  {
    imgUrl: tuor7,
    tutorName: "Emma Johansson",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "German",
    experience: "7 years",
    specialities: "Business",
    teachingSTyle: "Structured, goal-oriented",
    speaks: "German, English",
    rating: 4.7,
    totalLessons: 1023,
  },
  {
    imgUrl: tuor8,
    tutorName: "Isabella Rossi",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Italian",
    experience: "4 years",
    specialities: "Italian conversation",
    teachingSTyle: "Casual, practice-focused",
    speaks: "Italian, English",
    rating: 4.6,
    totalLessons: 890,
  },
];


const TrendingTutors = () => {

  const [AcitveTab, setAcitveTab] = useState<string | undefined>(
    trendingOption[0]
  );
  const { data, isLoading } = useGetAllTutorsQuery();
  console.log(data?.data?.data);

if (isLoading) {
  return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;
}




  return (
    <section className="flex flex-col  gap-y-[60px] h-auto  pb-10 xl:pb-[80px]  items-center justify-center  w-full xl:mx-auto xl:container ">
      <div className="flex flex-col items-center gap-y-10">
        <Heading Variant="h4" Txt={`Trending`} className="common-heading " />
        <div className="flex justify-center xl:justify-start flex-wrap gap-y-2 md:gap-y-4 gap-x-3 md:gap-x-6 ">
          {trendingOption.map((item, idx) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  setAcitveTab(item);
                }}
                className={`
                  ${
                    AcitveTab === item
                      ? " bg-primary-blue text-white  "
                      : "border-solid border-alt-gray text-primary-blue "
                  }
                  h-auto w-auto cursor-pointer rounded-[60px]  py-2 md:py-4 px-[28px] border-[1px] font-medium ease-in-out duration-300 text-sm md:text-base
                  `}
                Txt={item}
              />
            );
          })}
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] items-center justify-center flex-wrap ">
        {trendingTutors.map((item, idx) => {
          return (
            <TrendingTutorsCard
              key={idx}
              imgUrl={item.imgUrl}
              redirectLink={item.redirectLink}
              tutorName={item.tutorName}
              language={item.language}
              experience={item.experience}
              specialities={item.specialities}
              teachingSTyle={item.teachingSTyle}
              speaks={item.speaks}
              rating={item.rating}
              totalLessons={item.totalLessons}
              from={item.from}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrendingTutors;
