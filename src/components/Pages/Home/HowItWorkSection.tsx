import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import frame1 from "../../../assets/images/how-it-works/frame1.png";
import frame2 from "../../../assets/images/how-it-works/frame2.png";
import frame3 from "../../../assets/images/how-it-works/frame3.png";
import step1 from "../../../assets/images/how-it-works/step1.png";
import Image from "../../Tags/Image/Image";

type howitWorksSchema = {
  imgUrl: string;
  title: string;
  descreption: string;
};

const howitWorkSArr: howitWorksSchema[] = [
  {
    imgUrl: frame1,
    title: "Find your perfect tutor",
    descreption:
      "You'll find your ideal tutor among the thousands who are registered on our platform. They will tailor the classes to your needs and help you to achieve your goals.",
  },
  {
    imgUrl: frame2,
    title: "You choose the time",
    descreption:
      "Choose an online tutor for the time and date you want, and enjoy the flexibility of online classes.",
  },
  {
    imgUrl: frame3,
    title: "Find your perfect tutor",
    descreption:
      "You'll find your ideal tutor among the thousands who are registered on our platform. They will tailor the classes to your needs and help you to achieve your goals.",
  },
];

const HowItWorkSection = () => {
  return (
    <section className="flex flex-col gap-y-[30px] xl:gap-y-[60px] h-auto pt-5 xl:pt-[100px] pb-10 xl:pb-[80px] items-center w-full xl:container">
      <div className="flex flex-col gap-y-4 items-center">
        <Heading
          Variant="h4"
          Txt={`Here's how it works`}
          className="common-heading"
        />
        <Paragraph
          className="common-sub-heading text-center"
          Txt={"Curious about what your learning journey will look like?"}
        />
      </div>
      <div className="flex flex-col  lg:gap-y-8 xl:gap-y-[120px]">
        {howitWorkSArr.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-y-5 gap-x-20 relative items-center ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col gap-y-4">
                <Heading
                  Txt={item.title}
                  className="text-2xl text-primary-gray font-bold"
                />
                <Paragraph
                  Txt={item.descreption}
                  className="text-base font-normal text-alt-gray max-w-[429px]"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="rounded-[12px] relative border-[1px] border-solid border-alt-border h-auto w-auto mb-5 xl:mb-0 p-5 xl:p-10"
              >
                <Image
                  Src={item.imgUrl}
                  Alt="not found"
                  className="w-[382px] h-[276px] object-cover"
                />

                {/* NEXT STEP ARROW */}
                {idx < howitWorkSArr.length - 1 && (
                  <div
                    className={`absolute hidden lg:block  bottom-0 ${
                      isEven
                        ? "left-0 rotate-[-75deg] ml-[-50px] "
                        : "right-0 rotate-[75deg] mr-[-50px] "
                    } mb-[-80px]`}
                    title="Next step"
                  >
                    <Image
                      Src={step1}
                      className={`w-[76px] h-[37px]  ${
                        isEven ? "" : "transform scale-x-[-1]"
                      }`}
                      Alt="next step arrow"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorkSection;
