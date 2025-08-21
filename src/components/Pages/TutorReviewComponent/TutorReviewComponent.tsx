import { useState } from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import { SearchIconSmall } from "../../SvgContainer/SVgContainer";
import Button from "../../Tags/Button/Button";
import { useNavigate } from "react-router-dom";


type Review = {
  id:number
  name: string;
  rating: number;
  date: string;
  content: string;
};

type RatingSummary = {
  total: number;
  average: number;
  breakdown: {
    [key: number]: number;
  };
};

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Eleanor Pena",
    rating: 5,
    date: "June 15, 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    rating: 5,
    date: "June 15, 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 3,
    name: "Kristin Watson",
    rating: 4,
    date: "June 15, 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    rating: 4,
    date: "June 15, 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

const ratingSummary: RatingSummary = {
  total: 28,
  average: 4.9,
  breakdown: {
    5: 22,
    4: 5,
    3: 1,
    2: 0,
    1: 0,
  },
};

const TutorReviewComponent = () => {
  const [filter, setFilter] = useState<string>("This Week");

  const navigate = useNavigate()

  const handleStudentProfileReview = (id:number):void => {
    navigate(`/dashboard/student/profile/${id}`);
  }

  return (
    <section className=" w-auto container flex flex-col gap-y-8">
      {/* Heading Section */}
      <div className="h-auto w-auto p-8 rounded-[12px] bg-primary-blue flex flex-col gap-y-3">
        <Heading
          Txt={`Reviews`}
          Variant="h4"
          className="text-white font-[600] text-[32px]"
        />
        <Paragraph
          className="text-sm font-normal text-secondary-white leading-[124%]"
          Txt={`See what your students are saying about your sessions.`}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 items-start">
        {/* Rating Summary */}
        <aside className="w-full bg-white  lg:w-1/4 p-6 border-[1px] border-solid border-secondary-white flex flex-col gap-y-8 rounded-lg shadow-sm">
          <div className="flex flex-col gap-y-3 ">
            <Heading
              Txt={`Rating Summary`}
              Variant="h5"
              className="text-2xl font-[600] text-black"
            />
            <div className="flex flex-row gap-x-2 items-center ">
              <Paragraph
                Txt={ratingSummary.average}
                className="text-2xl font-[600] text-black"
              />
              <Paragraph
                Txt={`★ ★ ★ ★ ★`}
                className="text-lg font-bold text-yellow-500"
              />
            </div>
            <Paragraph
              className="text-alt-gray text-base font-normal "
              Txt={`Based on ${ratingSummary.total} reviews`}
            />
          </div>
          <div className="flex flex-col gap-y-5 ">
            {[5, 4, 3, 2, 1].map(star => (
              <div
                key={star}
                className="flex justify-between items-center gap-2 text-sm"
              >
                <span className=" text-black text-base font-normal leading-[150%] ">
                  {star} ★
                </span>
                <div className="w-[70%] h-2 bg-[#D9D9D9] rounded relative">
                  <div
                    className="absolute h-2 bg-yellow-400 rounded"
                    style={{
                      width: `${
                        (ratingSummary.breakdown[star] / ratingSummary.total) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <span className="text-primary-gray font-normal leading-[150%]">
                  {String(ratingSummary.breakdown[star] || 0).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Reviews */}
        <div className="w-full lg:w-3/4 space-y-4">
          {/* Filter Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-x-8">
            <div className="relative flex-1">
              <div
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <SearchIconSmall />
              </div>
              <input
                type="text"
                placeholder="What would you like to learn"
                className="outline-none py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-full"
              />
            </div>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="outline-none py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-auto"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>All Time</option>
            </select>
          </div>
          <div className="h-[70vh]   flex flex-col gap-y-8 overflow-y-auto  ">
            {reviewsData.map((review, idx) => (
              <div key={idx} className="p-8 bg-white rounded-[12px]  shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-y-2 ">
                    <div className="cursor-pointer" onClick={() => {
                      handleStudentProfileReview(review.id)
                    }} >
                      <Heading
                        className="text-base text-secondary-black font-normal "
                        Txt={review.name}
                      />
                    </div>
                    <div className="text-yellow-400 text-base">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{review.content}</p>
                <Button Txt={"Reply"} className="primary-btn !text-base " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorReviewComponent;
