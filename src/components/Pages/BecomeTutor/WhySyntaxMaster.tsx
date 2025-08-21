import {  useState } from "react";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Image from "../../Tags/Image/Image";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import itGirl from "../../../assets/images/tutors/it-girl.png";
import { useGetBecomeTutorsQuery } from "../../../redux/Slices/cmsSlice";
import Loader from "../../Loader/Loader";

// Define the type for card data
type Card = {
  title: string;
  description: string;
  image_url: string;
};

const WhySyntaxMaster = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { data, isLoading } = useGetBecomeTutorsQuery();

  // If data is still loading, show the loader
  if (isLoading)
    return <Loader className="mt-10 text-7xl my-10 text-primary-blue" />;

  // Access cards data from the response, providing a fallback to an empty array
  const cards: Card[] =
    data?.data?.whyTeachWithSyntaxMaster?.whyTeachWithSyntaxMasters || [];

  // Reduced spacing between cards
  const CARD_SPACING = 80;
  const HOVER_LIFT = 30;

    const backgroundColors = ["#9762FD", "#4465C2", "#333333", "#183272"];

  return (
    <>
      <section className="h-auto w-full pb-[120px]">
        <div className="container">
          <div className="flex flex-col gap-y-[80px]">
            {/* Upper part */}
            <div className="flex flex-col items-center gap-y-4 ">
              <Heading
                Variant="h4"
                Txt={
                  data?.data?.whyTeachWithSyntaxMaster?.whyTeachWithSyntaxTitle
                    ?.title || "Why Teach with Syntax Master"
                }
                className="common-heading"
              />
              <Paragraph
                className="common-sub-heading"
                Txt={
                  data?.data?.whyTeachWithSyntaxMaster?.whyTeachWithSyntaxTitle
                    ?.sub_title ||
                  "Join thousands of tutors who have transformed their passion into a thriving career"
                }
              />
            </div>

            {/* Lower part */}
            <div className="pl-5 xl:pl-[30px] 2xl:pl-[100px] 3xl:pl-[150px] w-full md:pb-[160px]">
              <div className="flex flex-col xl:flex-row 2xl:flex-row gap-y-10 gap-x-[80px] 2xl-gap-x-[200px] 3xl:gap-x-[280px] items-center pb-[650px] sm:pb-[500px] md:pb-[500px] lg:pb-[10px] xl:pb-0">
                {/* Left Side */}
                <div className="flex flex-col gap-y-6">
                  <Image
                    className="h-auto w-full xl:h-[520px] 2xl:h-[617px] xl:w-[430px] 2xl:w-[480px] 3xl:w-[526px]"
                    Alt="not found"
                    Src={itGirl}
                  />
                  <Button
                    Txt={`Apply as a Tutor`}
                    className="primary-btn !w-full"
                  />
                </div>

                {/* Right Side */}
                <div
                  className="xl:relative grid lg:grid-cols-2 gap-3 xl:block"
                  style={{ height: `${cards.length * CARD_SPACING + 60}px` }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`xl:absolute cursor-pointer w-full xl:w-[350px] 2xl:w-[440px] rounded-[12px] flex flex-col gap-y-4 p-5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                        hoveredCard === index
                          ? "z-10 shadow-lg"
                          : "z-[1] shadow-md"
                      }`}
                      style={{
                        backgroundColor: backgroundColors[index] || "#9762FD",
                        top: `${index * CARD_SPACING}px`,
                        transform:
                          hoveredCard === index
                            ? `translateY(-${HOVER_LIFT}px) scale(1.02)`
                            : "translateY(0) scale(1)",
                        transitionProperty: "transform, box-shadow",
                        willChange: "transform",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex flex-row gap-x-4 items-center">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                          <img
                            src={`${
                              import.meta.env.VITE_SERVER_BASE_URL_CONTENT
                            }${card.image_url}`}
                            alt={card.title}
                          />
                        </div>
                        <Heading
                          Txt={card.title}
                          className="text-[18px] xl:text-xl 2xl:text-2xl font-[600] text-white whitespace-normal"
                        />

                      </div>
                        <div
                          data-aos="fade-up"
                          className="max-w-[629px] text-lg text-white font-normal leading-[150%]"
                          dangerouslySetInnerHTML={{ __html: card.description }}
                        />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySyntaxMaster;
