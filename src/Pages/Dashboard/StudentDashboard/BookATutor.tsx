import SummaryCard from "../../../components/Cards/SummaryCard";
import BookALessons from "../../../components/Pages/BookATutor/BookALessons";

const BookATutor = () => {
  return (
    <section className=" h-auto w-auto flex flex-col 3xl:flex-row gap-x-8 container  ">
      <BookALessons />
      <SummaryCard />
    </section>
  );
};

export default BookATutor;
