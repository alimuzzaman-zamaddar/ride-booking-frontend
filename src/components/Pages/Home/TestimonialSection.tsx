import TestimonialCard from "../../Cards/TestimonialCard";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import oldwoman from "../../../assets/images/testimonial/old-woman.png";
import hijablady from "../../../assets/images/testimonial/hijab-lady.png";
import russian from "../../../assets/images/testimonial/russian.png";
import silkgirl from "../../../assets/images/testimonial/silk-girl.png";
import sunglass from "../../../assets/images/testimonial/sun-glass.png";
import yellowglass from "../../../assets/images/testimonial/yello-dress.png";

const testimonialArr = [
  {
    bgImgUrl: oldwoman,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Jenny Wilson",
    descreption:
      "Syntax master made it easy to connect with native English tutors. My speaking confidence improved a lot in just 5 lessons.",
  },
  {
    bgImgUrl: sunglass,
    ratingCount: 4.5,
    location: "Mandarin with Sarah",
    authorName: "Darrell Steward",
    descreption:
      "As a beginner in yoga, I was nervous at first. But my instructor was patient and supportive. Now I love attending my online sessions.”",
  },
  {
    bgImgUrl: hijablady,
    ratingCount: 4,
    location: "Mandarin with Sarah",
    authorName: "Annette Black",
    descreption:
      "I took art classes and within 2 months I felt confident about my painting skills. The tutors here are professionals and super friendly!",
  },
  {
    bgImgUrl: yellowglass,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Mina T.",
    descreption:
      "The platform is smooth and the tutors are top-class. I loved how I could schedule lessons at my convenience.",
  },
  {
    bgImgUrl: silkgirl,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Theresa Webb",
    descreption:
      "Syntax Master gave me the confidence to finally pursue my dream of learning guitar. My tutor is patient and really understands how to teach beginners like me.",
  },
  {
    bgImgUrl: russian,
    ratingCount: 4.5,
    location: "Mandarin with Sarah",
    authorName: "Busola Dakolo",
    descreption:
      "Syntax Master gave me the confidence to finally pursue my dream of learning guitar. My tutor is patient and really understands how to teach beginners like me.",
  },
];



const TestimonialSection = () => {
  return (
    <section className="h-auto flex flex-col gap-y-6 xl:gap-y-12  w-auto pb-10 xl:pb-[120px] container ">
      <div className=" flex flex-col gap-y-4 items-center">
        <Heading
          Variant="h4"
          Txt={`What students, love, about us`}
          className="common-heading"
        />
        <Paragraph
          className="common-sub-heading"
          Txt={
            "Safe, effective, affordable learning. For language learners just like you."
          }
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]  ">
        {testimonialArr.map((item, idx) => {
          return (
            <TestimonialCard
              key={idx}
              bgImgUrl={item.bgImgUrl}
              ratingCount={item.ratingCount}
              authorName={item.authorName}
              descreption={item.descreption}
              location={item.location}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
