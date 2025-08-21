import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Heading from "../Tags/Heading/Heading";

const PlatformGuidelines: React.FC = () => {
  return (
    <div className="">
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-alt-border hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3 text-sm font-semibold"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className=" max-w-[860px] mx-auto">
        <div className="mb-8 mt-5 xl:mt-0">
          <Heading
            Txt="Platform Guidelines"
            className="text-secondary-black text-[24px] xl:text-[32px] font-bold leading-[150%]"
            Variant="h3"
          />

          <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
            Important guidelines and conduct policies for all Syntax Master
            users.
          </p>
        </div>
        <div className="bg-white p-4 xl:p-8 border border-alt-border rounded-lg mb-8">
          <div className="">
            <h3 className="text-secondary-black text-xl lg:text-[24px] font-semibold leading-[150%]">
              Community Guidelines
            </h3>
            <div className="mt-4">
              <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
                Respect and Professional Conduct
              </h3>
              <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
                All users must maintain respectful and professional
                communication at all times. Harassment, discrimination, or
                inappropriate behavior will not be tolerated.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
              Quality Standards
            </h3>
            <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
              Tutors are expected to provide high-quality educational content
              and maintain punctuality for scheduled sessions. Students should
              come prepared and engaged.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
              Communication Guidelines
            </h3>
            <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
              Keep all communication within the platform. Share contact
              information or external links only when necessary for educational
              purposes.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 border border-alt-border rounded-lg">
          <div className="mt-6 ">
            <h3 className="text-secondary-black text-xl lg:text-[24px] font-semibold leading-[36px]">
              Code of Conduct
            </h3>
            <div className="mt-4">
              <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
                Academic Integrity
              </h3>
              <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
                All educational content must be original or properly attributed.
                Plagiarism and academic dishonesty are strictly prohibited.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
                Payment and Cancellation
              </h3>
              <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
                Follow the platform's payment policies and cancellation
                procedures. Disputes should be resolved through official
                channels.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-secondary-black text-sm lg:text-[16px] font-semibold leading-[36px]">
                Privacy and Safety
              </h3>
              <p className="text-alt-gray text-sm lg:text-[16px] font-normal leading-[24px] mt-2">
                Protect personal information and report any safety concerns
                immediately. Do not share sensitive personal or financial
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformGuidelines;
