import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { IoWarningOutline } from "react-icons/io5";

interface ReportModalProps {
  onClose: () => void;
}

interface FormData {
  reportReason: string;
  description: string;
}

export const ReportModal = ({ onClose }: ReportModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Outside click to close
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const onSubmit = (data: FormData) => {
    console.log("Report submitted:", data);
    reset(); // Optional: reset form fields
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-[12px] max-w-[450px] relative w-full mx-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Title */}
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-3 text-red-700"> <IoWarningOutline />   <span className="text-black"> Report User</span></h3>
        <p className="text-sm text-gray-500 mb-4">
          You are reporting:{" "}
          <span className="font-semibold text-gray-800">David Chen</span>
        </p>
        <p className="text-xs text-gray-400 mb-6">
          Reports are reviewed by our admin team. False reports may result in
          account restrictions.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Reason for Report */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">
              Reason for Report *
            </label>
            <select
              {...register("reportReason", { required: "Please select a reason" })}
              className="w-full  px-3  py-3 border border-gray-300 rounded-[12px]"
            >
              <option value="">Select violation type</option>
              <option value="abusiveLanguage">Abusive language</option>
              <option value="inappropriateContent">Inappropriate content</option>
              <option value="harassment">Harassment</option>
            </select>
            {errors.reportReason && (
              <p className="text-sm text-red-500 mt-1">
                {errors.reportReason.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">Description</label>
            <textarea
              {...register("description", { required: "Please provide a description" })}
              className="w-full px-3  py-3 border border-[var(--color-alt-border)] rounded-[12px]"

              placeholder="Provide details about the violation..."
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-5">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 flex-1 text-gray-800 py-3 px-4 rounded-[12px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-400 flex-1 text-white py-3 px-4 rounded-[12px]"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
