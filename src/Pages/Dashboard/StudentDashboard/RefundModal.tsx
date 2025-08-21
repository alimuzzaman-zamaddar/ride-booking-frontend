import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

interface RefundModalProps {
  onClose: () => void;
}

interface FormData {
  refundReason: string;
}

export const RefundModal = ({ onClose }: RefundModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose();
  };

  return (
    <div  className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg max-w-[450px] relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Request Refund</h3>

        {/* Important Note */}
        <div className="bg-[#FFEEF0] text-[#FF6F61] p-3 mb-4 rounded-[12px]">
          <p className="font-semibold mb-1">Important:</p>
          <p className="text-sm">
            Refunds are only available within 48 hours if no complaints are made against the tutor.
          </p>
        </div>

        {/* Lesson Details */}
        <div className="mb-6 bg-[var(--color-off-white)] p-4 rounded-[12px]">
          <p className="font-medium text-gray-800">Lesson Details:</p>
          <p className="text-gray-600">Conversation Practice with Maria Garcia</p>
          <p className="text-gray-500">Yesterday</p>
        </div>

        {/* Refund Reason Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="refundReason" className="block text-sm text-gray-600 mb-2">
              Reason for Refund *
            </label>
            <select
              id="refundReason"
              {...register("refundReason", { required: "This field is required" })}
              className="w-full px-3 py-3 border border-gray-300 rounded-[12px]"
            >
              <option value="">Select a reason</option>
              <option value="qualityIssue">Quality issue with the lesson</option>
              <option value="tutorNoShow">Tutor did not show up</option>
              <option value="other">Other</option>
            </select>
            {errors.refundReason && (
              <p className="text-red-500 text-sm mt-1">{errors.refundReason.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-5">
            <button
              type="button"
              onClick={onClose}
              className="bg-[var(--color-off-white)] flex-1 text-[var(--button-bg-blue)] py-3 px-4 rounded-[12px] hover:bg-[var(--button-bg-blue)] border border-[var(--color-alt-border)] hover:text-white transition duration-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[var(--button-bg-blue)] flex-1 text-white py-3 px-4 rounded-[12px] hover:bg-white border border-[var(--color-alt-border)] hover:text-[var(--button-bg-blue)] transition duration-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
