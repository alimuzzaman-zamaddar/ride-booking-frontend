"use client";

import  { useState } from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import { CircleActive, CircleInActive } from "../../SvgContainer/SVgContainer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full h-auto  xl:pb-10 xl:pb-[120px] gap-y-6 xl:gap-y-[59px] flex flex-col  container items-center  ">
      <Heading
        Variant="h4"
        Txt={`Frequently asked questions`}
        className="common-heading"
      />
      <div className="w-[96%] xl:w-[80%] flex flex-col gap-y-5  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white flex shadow-md flex-col border-[1px] border-solid border-alt-border gap-y-4 rounded-[12px] xl:rounded-[30px] h-auto w-full p-5 xl:p-10 cursor-pointer ease-in-out duration-300 hover:shadow"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <Heading
                className="font-[600] text-dark-blue leading-[164%] text-lg "
                Txt={item.question}
              />
              <span>
                {activeIndex === index ? <CircleActive /> : <CircleInActive />}
              </span>
            </div>
            {activeIndex === index && (
              <Paragraph
                Txt={
                  "Instantly generate job-specific resumes tailored to your skills and experience."
                }
                className=" text-base text-primary-gray font-normal leading-[164%] "
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
