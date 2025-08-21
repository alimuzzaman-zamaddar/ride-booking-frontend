import { useNavigate, useParams } from "react-router-dom";
import { teacherDetials } from "../../StaticData/StaticData";
import { Progress, Time, VideoIcon } from "../../SvgContainer/SVgContainer";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import { useRef, useState } from "react";
import Button from "../../Tags/Button/Button";

const TutorTrial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  type DetailsSchma = {
    Svg: React.FC;
    descreption: string;
  };

  let { id } = useParams();

  const tutorId = id ? Number(id) : undefined;

  const activeTutor = teacherDetials.find(tutor => tutor.id === tutorId);

  console.log(activeTutor);

  const DetailsArr: DetailsSchma[] = [
    {
      Svg: Progress,
      descreption: "2 new contacts and 3 lesson bookings in the last 48 hours",
    },
    {
      Svg: Time,
      descreption: "Usually responds in less than an hour",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-auto w-auto p-4 lg:p-8 shadow-md rounded-[12px] bg-white h-[300px] 2xl:max-h-[600px]  flex flex-col gap-y-6   ">
      <div className="flex flex-col gap-y-6 justify-between ">
        <div className="relative lg:w-[494px] h-[80%] rounded-[12px] overflow-hidden">
          <video
            ref={videoRef}
            src={activeTutor?.introductionVideo}
            className="w-full h-full object-cover rounded-[12px]"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
          />
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlayPause}
            >
              <VideoIcon />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            onClick={() => {
              navigate(`/dashboard/book/tutor/${activeTutor?.id}`);
            }}
            className="text-base lg:text-lg   primary-btn !w-full "
            Txt={`Book a Trail Lessons`}
          />
          <Button
            className="text-base lg:text-lg reverse-primary-btn !w-full "
            Txt={`Send Message`}
          />
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-y-4 ">
          {DetailsArr.map((item, idx) => {
            const Item = item.Svg;
            return (
              <li key={idx} className="flex items-start flex-row gap-x-2 ">
                <Item />
                <Paragraph
                  Txt={item.descreption}
                  className="text-sm font-normal max-w-[302px] text-primary-gray "
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TutorTrial;
