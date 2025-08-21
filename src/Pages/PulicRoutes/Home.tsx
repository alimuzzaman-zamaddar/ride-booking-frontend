import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
// import HowItWorkSection from "../../components/Pages/Home/HowItWorkSection";
// import Skillsset from "../../components/Pages/Home/Skillsset";
import SyntaxMaster from "../../components/Pages/Home/SyntaxMaster";
import TestimonialSection from "../../components/Pages/Home/TestimonialSection";
import TrendingTutors from "../../components/Pages/Home/TrendingTutors";
import TutorsOrigin from "../../components/Pages/Home/TutorsOrigin";
// import prettyGirl from "../../assets/images/testimonial/pretty-girl.png";
import BecomeATecher from "../../components/CommonComponents/BecomeATecher";
// import bgVideo from "../../assets/videos/train.mp4";
import HowItWorks from "./HowItWorks";
import SkillsSection from "../../components/Pages/Home/SkillsSection";
import { useGetHomeContentQuery } from "../../redux/Slices/cmsSlice";
import Loader from "../../components/Loader/Loader";


const Home = () => {
  const { data, isLoading } = useGetHomeContentQuery();
  console.log(data?.data?.banner?.background_image, "from home");



  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },

  ];
  
  
  
  return (
    <section className="w-full h-auto  ">
      {isLoading ? (
        <Loader className="mt-10 text-7xl my-10 text-primary-blue" />
      ) : (
        <>
          <CommonHeroBanner
            title={data?.banner?.title}
            trendingSubject={trendingSubjects}
            videoLink={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}${
              data?.data?.banner?.background_image
            }`}
            variant={"home"}
            descreption={data?.banner?.description}
          />
          <TutorsOrigin isHome={true} />
          {/* <Skillsset /> */}
          <SkillsSection />
          <TrendingTutors />
          {/* <HowItWorkSection /> */}
          <HowItWorks data={data?.data?.homeHowWorks} />
          <SyntaxMaster data={data?.data?.homeWhy} />
          <TestimonialSection />
          <BecomeATecher
            isHome={true}
            subTitle={data?.data?.homeBecomeTeacher.title}
            bgImgUrl={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}${
              data?.data?.homeBecomeTeacher?.image_url
            }`}
            btnTxt="Become a Teacher"
            title={data?.data?.homeBecomeTeacher.sub_title}
            descreption={data?.data?.homeBecomeTeacher.description}
          />
        </>
      )}
    </section>
  );
};

export default Home;
