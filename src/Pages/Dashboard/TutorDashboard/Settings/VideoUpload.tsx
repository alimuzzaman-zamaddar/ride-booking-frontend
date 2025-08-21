import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadVideoSvg } from "../../../../components/SvgContainer/SVgContainer";

interface FormData {
  video: FileList;
}

const VideoUpload: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [duration, setDuration] = useState<string>("0:00");

  // Handle form submission
  const onSubmit = (data: FormData) => {
    const file = data.video[0];
    if (file) {
      // Create URL for video preview
      const url = URL.createObjectURL(file);
      setVideoURL(url);

      const videoElement = document.createElement("video");
      videoElement.src = url;

      // Get video duration
      videoElement.onloadedmetadata = () => {
        const minutes = Math.floor(videoElement.duration / 60);
        const seconds = Math.floor(videoElement.duration % 60);
        setDuration(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
      };
    }
    console.log(data);
  };

  // Watch the video input field to check for file selection
  const videoInput = watch("video");

  return (
    <div className="max-w-[400px] p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-[20px] text-secondary-black font-semibold mb-4">
        Video Introduction
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        {/* Video Preview Section */}
        <div className="w-full mb-4">
          <video
            id="video-preview"
            className="w-full max-w-full rounded-lg"
            controls
            src={videoURL ?? undefined}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          A good video introduction helps students get to know you better and
          increases booking rates.
        </p>

        {/* Display video duration */}
        {videoInput && videoInput[0] && (
          <p className="mb-2 text-sm text-gray-600">Duration: {duration}</p>
        )}

        {/* Upload button */}
        <label
          htmlFor="video"
          className="border w-full text-center border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[14px] font-semibold duration-700 hover:text-text-white px-6 py-[14px] cursor-pointer text-secondary-black rounded-[8px] flex justify-center items-center gap-3 mb-3"
        >
          <span className="mr-3">
            <UploadVideoSvg />
          </span>{" "}
          Upload New Video
          <input
            type="file"
            id="video"
            accept="video/mp4"
            {...register("video", { required: true })}
            className="hidden"
          />
        </label>

        {/* Submit button */}
        <button
          type="submit"
          className="border w-full text-center border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[14px] font-semibold duration-700 hover:text-text-white px-6 py-[14px] cursor-pointer text-secondary-black rounded-[8px] flex justify-center items-center gap-3"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
