// StudentSignUpLayout.tsx
import React from "react";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import Image from "../../../components/Tags/Image/Image";
import student from "../../../assets/images/signup/onbording.png"

interface StudentSignUpLayoutProps {
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

const stepInfo = [
  {
    title: "Complete Your Profile",
    description:
      "Help us personalize your learning experience. This information will help us match you with the right tutors.",
    subtitle: "Personal Information",
  },
  {
    title: "Complete Your Profile",
    description:
      "Help us personalize your learning experience. This information will help us match you with the right tutors.",
    subtitle: "Learning Preferences",
  },
  {
    title: "Complete Your Profile",
    description:
      "Help us personalize your learning experience. This information will help us match you with the right tutors.",
    subtitle: "Goals & Experience",
  },
  {
    title: "Complete Your Profile",
    description:
      "Help us personalize your learning experience. This information will help us match you with the right tutors.",
    subtitle: "Learning Preferences",
  },
];

export const StudentOnboardingLayout: React.FC<StudentSignUpLayoutProps> = ({
  step,
  totalSteps,
  children,
}) => {
  const current = stepInfo[step - 1];
  const progress = (step / totalSteps) * 100;

  return (
    <div className=" min-h-screen container flex items-center justify-center px-4 my-10  ">
      <div className="w-auto  shadow-md flex flex-col xl:flex-row rounded-[12px] border  border-[var(--color-secondry-gray)]">
      {/* Left Image Section */}
      <div data-aos="fade-up" className="hidden xl:block xl:w-2/5   ">
        <Image
          Src ={student}
          Alt={"Student Onboarding"}
          className="object-cover w-full h-full rounded-l-[12px]"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full xl:w-3/5 p-10 ">
        {/* Heading */}
          <Heading data-aos="fade-up" Variant='h2' Txt={current.title} className='text-[22px] xl:text-[32px] leading-[150%] font-bold text-gray-900 mb-4'  />
          <Paragraph data-aos="fade-up" Txt={current.description} className='text-sm text-gray-500 mb-10'  />

        {/* Progress Bar */}
        <div data-aos="fade-up" className="mb-6">
          <div className="text-sm text-gray-600 mb-1">
            Step {step} of {totalSteps}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-900 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">
            {current.subtitle}
          </div>
        </div>

        {/* Step Content */}
        <div>{children}</div>
      </div>
      </div>
    </div>
  );
};
