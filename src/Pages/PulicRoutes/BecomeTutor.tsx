import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import BecomeATecher from "../../components/CommonComponents/BecomeATecher";
import HowItWorksTutor from "../../components/Pages/BecomeTutor/HowItWorksTutor";
import WhySyntaxMaster from "../../components/Pages/BecomeTutor/WhySyntaxMaster";
import FAQSection from "../../components/Pages/BecomeTutor/FAQSection";
import { useGetBecomeTutorsQuery } from "../../redux/Slices/cmsSlice";
import Loader from "../../components/Loader/Loader";


const BecomeTutor = () => {


  const { data, error, isLoading } = useGetBecomeTutorsQuery();
  console.log(data?.data?.tutorEarnMoney?.title);

  // Handle loading state
  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  // Handle error state
  if (error) return <div>Error loading tutors!</div>;

  // Check if data is available before mapping over it
  if (!data || data.length === 0) {
    return <div>No tutors available.</div>;
  }

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
        variant={"become-tutor"}
        communityCont={`10-80`}
        higlightedTxt="Join 2,500+ Expert Tutors Worldwide"
        activeMember={50}
        authenticCount={100}
        descreption={data?.data?.banner?.description}
      />
      <HowItWorksTutor />
      <WhySyntaxMaster />
      <FAQSection data={data?.data?.faqs} />
      <BecomeATecher
        isHome={false}
        bgImgUrl={`${import.meta.env.VITE_SERVER_BASE_URL_CONTENT}${
          data?.data?.tutorEarnMoney?.image_url
        }`}
        btnTxt="Apply as a Teacher"
        subTitle={data?.data?.tutorEarnMoney?.title}
        descreption={data?.data?.tutorEarnMoney?.description}
      />
    </section>
  );
};

export default BecomeTutor;
