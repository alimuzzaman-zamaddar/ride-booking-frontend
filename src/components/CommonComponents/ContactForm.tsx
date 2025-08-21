import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FaAngleLeft } from "react-icons/fa";
import Heading from "../Tags/Heading/Heading";

interface FormData {
  subject: string;
  category: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="">
      <button
        onClick={() => window.history.back()}
        className="bg-[#051345] border hover:border-alt-border hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
      >
        <FaAngleLeft /> Back to Search
      </button>
      <div className="max-w-[860px] mx-auto">
        <div className="mb-8 mt-5 xl:mt-0">
          <Heading
            Txt="Contact Admin"
            className="text-secondary-black text-[24px] xl:text-[32px] font-bold leading-[150%]"
            Variant="h3"
          />

          <p className="text-alt-gray text-[16px] font-normal leading-[24px] mt-2">
            Need to reach our admin team? Send us a message and we'll get back
            to you quickly.
          </p>
        </div>

        <div className=" p-6 bg-white rounded-lg shadow-lg">
          <h3 className=" text-[20px] xl:text-[24px] text-secondary-black font-semibold mb-6">
            Send Message to Admin
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className="block text-[16px] font-medium text-secondary-black"
              >
                Subject *
              </label>
              <Controller
                name="subject"
                control={control}
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <input
                    id="subject"
                    type="text"
                    placeholder="Brief Subject Of Your Message"
                    {...field}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            {/* Category Dropdown */}
            <div>
              <label
                htmlFor="category"
                className="block text-[16px] font-medium text-secondary-black"
              >
                Category *
              </label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <select
                    id="category"
                    {...field}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Message Category</option>
                    <option value="Technical">Technical</option>
                    <option value="Billing">Billing</option>
                    <option value="General">General</option>
                  </select>
                )}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-[16px] font-medium text-secondary-black"
              >
                Message *
              </label>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <textarea
                    id="message"
                    {...field}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Brief Subject Of Your Message"
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Button Group */}
            <div className="flex justify-end gap-4 items-center mt-4">
              <button
                type="button"
                className="hover:bg-primary-blue border border-alt-border bg-bg-white text-text-blue duration-700 hover:text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary-blue border hover:border-alt-border hover:bg-bg-white hover:text-text-blue duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Direct Contact Information */}
        </div>
        <div className="">
          <div className="mt-8 p-8 border border-alt-border bg-white rounded-lg">
            <h4 className="text-[20px] xl:text-[24px] text-secondary-black font-semibold mb-4">
              Direct Contact Information
            </h4>
            <div className="flex gap-6">
              <div className="mt-4">
                <p className="text-[16px] font-semibold mb-3 text-secondary-black">
                  Email Support
                </p>
                <p className="text-sm font-normal text-alt-gray">
                  admin@tutorhub.com
                </p>
                <p className="text-sm font-normal text-alt-gray">
                  Response within 24 hours
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[16px] font-semibold mb-3 text-secondary-black">
                  Phone Support
                </p>
                <p className="text-sm font-normal text-alt-gray">
                  +1 (555) 123-4567
                </p>
                <p className="text-sm font-normal text-alt-gray">
                  Business hours only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
