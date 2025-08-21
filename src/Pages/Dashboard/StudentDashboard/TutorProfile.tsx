import TutorDetails from "../../../components/Pages/TutorDetials/TutorDetails";
import TutorTrial from "../../../components/Pages/TutorProfile/TutorTrial";

const TutorProfile = () => {
  return (
    <section className="h-auto w-auto flex flex-col 3xl:flex-row justify-between xl:container   ">
      <TutorDetails />
      <TutorTrial />
    </section>
  );
};

export default TutorProfile;
