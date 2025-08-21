import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FeedbackFormData = {
  feedback: string;
};

const Support: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FeedbackFormData>();

  const onSubmit = (data: FeedbackFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-[850px] mx-auto p-6 space-y-6 bg-bg-white border border-alt-border rounded-xl">
      <h2 className="text-lg lg:text-2xl font-semibold">Support & Help</h2>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/dashboard/report-a-problem">
          <button className="border w-full text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">
            Report A Problem
          </button>
        </Link>
        <Link to="/dashboard/guidelines">
          <button className="border w-full text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">
            View Guidelines
          </button>
        </Link>
        <Link to="/dashboard/contact">
          <button className="border w-full text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">
            Contact Admin
          </button>
        </Link>

        <button className="border w-full text-xs p-[10px] border-alt-border rounded-md py-2 px-4 hover:bg-bg-light-gray cursor-pointer">
          Help Center
        </button>
      </div>

      {/* Feedback Box */}
      <div className="bg-blue-50 p-6 rounded-md">
        <h3 className="text-base lg:text-lg font-semibold text-secondary-blue">
          Confidential Feedback
        </h3>
        <p className="text-sm text-secondary-blue mb-4">
          Share your feedback with our admin team. This will be kept
          confidential.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Feedback</label>
            <textarea
              {...register("feedback", { required: true, maxLength: 500 })}
              className="w-full  border border-alt-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary-blue"
              rows={4}
              placeholder="Enter your feedback here..."
            />
            <div className="text-sm text-gray-500">
              {watch("feedback")?.length || 0}/500 characters
            </div>
            {errors.feedback && (
              <p className="text-red-500 text-sm">
                Feedback is required (max 500 characters).
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-secondary-blue cursor-pointer text-white px-6 py-2 rounded-md hover:bg-alt-border border-alt-border hover:text-primary-blue duration-500 transition"
          >
            Send Feedback
          </button>
        </form>
      </div>

      {/* Contact Box */}
      <div className="bg-white  border border-alt-border p-6 rounded-md shadow-sm">
        <h3 className="text-xl lg:text-[24px] font-semibold mb-2">
          Need More Help?
        </h3>
        <p className="text-base lg:text-lg mb-2">
          <strong>Support Email:</strong>
          <span className="text-text-gray">support@tutorhub.com</span>
        </p>
        <p className="text-base lg:text-lg">
          <strong>Emergency Contact:</strong>
          <span className="text-text-gray">+1 (555) 123-4567</span>
        </p>
      </div>
    </div>
  );
};

export default Support;


