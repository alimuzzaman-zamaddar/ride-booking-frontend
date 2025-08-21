import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import SyntaxMaster from "../../components/Pages/Home/SyntaxMaster";
import TestimonialSection from "../../components/Pages/Home/TestimonialSection";
// import bgVideo from "../../assets/videos/train.mp4";
import MasterWork from "../../components/Pages/FindTutors/MasterWork";
import AvailableTeacher from "../../components/Pages/FindTutors/AvailableTeacher";
import { useGetFindTutorsQuery } from "../../redux/Slices/cmsSlice";
import Loader from "../../components/Loader/Loader";




const FindaTutor = () => {

  const { data, error, isLoading } = useGetFindTutorsQuery();

    // Handle loading state
    if (isLoading) return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

    // Handle error state
    if (error) return <div>Error loading tutors!</div>;

    // Check if data is available before mapping over it
    if (!data || data.length === 0) {
      return <div>No tutors available.</div>;
    }



  // console.log(data?.data, "find a tutor");
  
  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },
  ];

  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner
        title={data?.data?.banner?.title}
        trendingSubject={trendingSubjects}
        videoLink={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}${
          data?.data?.banner?.background_image
        }`}
        variant={"find-tutor"}
        communityCont={2500}
        activeMember={4.9}
        authenticCount={100}
        descreption={data?.data?.banner?.description}
      />
      <div className="px-5 lg:px-0 container">
        <AvailableTeacher isHome={true} />
      </div>
      <SyntaxMaster data={data?.data?.homeWhy} />
      <TestimonialSection />
      <MasterWork data={data?.data?.howLessonWorks} />
    </section>
  );
};

export default FindaTutor;
