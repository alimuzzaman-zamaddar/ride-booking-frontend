import { useState } from "react";
import TeacherCard from "../../Cards/TeacherCard";
import { teacherDetials } from "../../StaticData/StaticData";
import {
  DollarSvg,
  FilterSvg,
  GlobePlane,
  SearchIconSmall,
} from "../../SvgContainer/SVgContainer";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const isAdminRoute =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/dashboard");

interface isHome {
  isHome: boolean;
}

const AvailableTeacher: React.FC<isHome> = ({ isHome }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const filterTeachers = () => {
    return teacherDetials.filter(teacher => {
      const matchesPrice = priceFilter
        ? teacher.hourlyRate.toString().includes(priceFilter)
        : true;
      const matchesCountry = countryFilter
        ? teacher.location.includes(countryFilter)
        : true;
      const matchesLanguage = languageFilter
        ? teacher.languagePreferences.includes(languageFilter)
        : true;
      const matchesSearch = searchQuery
        ? teacher.tutorName.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesPrice && matchesCountry && matchesLanguage && matchesSearch;
    });
  };

  const filteredTeachers = filterTeachers();
  const displayedTeachers = showAll
    ? filteredTeachers
    : filteredTeachers.slice(0, 8);

  return (
    <section
      className={`h-auto items-center w-auto container ${
        isHome ? "pt-14 xl:pt-20 pb-[40px] xl:pb-[120px] " : "py-8"
      } flex flex-col gap-y-10 xl:gap-y-20`}
    >
      <div
        {...(!isAdminRoute && {
          "data-aos": "fade-up",
          "data-aos-delay": "100",
        })}
        className="h-auto w-full shadow-md bg-white border-[1px] rounded-[12px] border-solid border-alt-border p-8 flex flex-wrap xl:flex-row justify-between"
      >
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-wrap gap-y-4 xl:flex-row gap-x-5 ">
            <div className="h-auto w-auto gap-x-2 text-sm xl:text-lg p-2 xl:p-3 border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center">
              <FilterSvg />
              <Heading
                className="text-md xl:text-lg font-[600]  text-primary-gray "
                Txt="All Filters"
              />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                value={priceFilter}
                onChange={e => setPriceFilter(e.target.value)}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none text-primary-gray w-auto gap-x-2 pl-10 xl:py-3 py-2 pr-3 border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center"
              >
                <option value="">Price Range</option>
                <option value="$5">$5 - $25</option>
                <option value="$25">$25 - $50</option>
                <option value="$50">$50 - $75</option>
              </select>
              <div className="absolute top-1/2 left-0  pl-2.5 -translate-y-1/2">
                <DollarSvg />
              </div>
            </div>

            {/* Country Filter */}
            <div className="relative">
              <select
                value={countryFilter}
                onChange={e => setCountryFilter(e.target.value)}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none text-primary-gray w-auto gap-x-2 pl-10 xl:py-3 py-2 pr-3 border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center"
              >
                <option value="">Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="KSA">KSA</option>
                <option value="IRAN">IRAN</option>
                <option value="BD">BD</option>
              </select>
              <div className="absolute top-1/2 left-0 pl-2.5 -translate-y-1/2">
                <GlobePlane />
              </div>
            </div>

            {/* Language Filter */}
            <div className="relative">
              <select
                value={languageFilter}
                onChange={e => setLanguageFilter(e.target.value)}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none text-primary-gray w-auto gap-x-2 pl-10 xl:py-3 py-2 pr-3 border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center"
              >
                <option value="">Language</option>
                <option value="English">English</option>
                <option value="Italian">Italian</option>
                <option value="Hindi">Hindi</option>
                <option value="French">French</option>
                <option value="Bangla">Bangla</option>
              </select>
              <div className="absolute top-1/2 left-0 pl-2.5 -translate-y-1/2">
                <GlobePlane />
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-[275px] flex-1 mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <SearchIconSmall />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search By Name"
              className="outline-none py-[8px] xl:py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[60px] ">
        <div className="flex flex-col gap-y-6 items-start justify-start ">
          <Heading
            className="text-2xl lg:text-[32px] text-black font-bold"
            Txt={`200+ online teachers available`}
          />
          <div className="flex flex-col gap-y-14 xl:gap-y-8">
            {displayedTeachers.map((item, idx) => (
              <TeacherCard key={idx} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-3 items-center ">
          <Button
            className="primary-btn !px-[53px] "
            Txt={showAll ? "View Less Tutors" : "View More Tutors"}
            onClick={handleShowMore}
          />
          <Paragraph
            className="text-base text-primary-gray font-normal"
            Txt={`Showing ${displayedTeachers.length} of ${filteredTeachers.length} tutors`}
          />
        </div>
      </div>
    </section>
  );
};

export default AvailableTeacher;
