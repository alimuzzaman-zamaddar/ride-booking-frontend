
import img1 from "../../../assets/category/language.png"
import img2 from "../../../assets/category/music.png"
import img3 from "../../../assets/category/math.png"
import img4 from "../../../assets/category/art.png"
import img5 from "../../../assets/category/yoga.png"
import img6 from "../../../assets/category/computer.png"
import img7 from "../../../assets/category/writeing.png"
import img8 from "../../../assets/category/Chess.png"
import { ArtSvg, ChessSvg, ComputerSvg, MathSvg, MusicSvg, WorldSvg, WritingSvg, YogaSvg } from "../../SvgContainer/SVgContainer"

interface Category {
  name: string;
  image: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    name: "Languages",
    image: img1,
    icon: <WorldSvg/>,
  },
  {
    name: "Music",
    image: img2,
    icon: <MusicSvg />,
  },
  {
    name: "Math",
    image: img3,
    icon: <MathSvg />,
  },
  {
    name: "Art",
    image: img4,
    icon: <ArtSvg />,
  },
  {
    name: "Yoga",
    image: img5,
    icon: <YogaSvg/>,
  },
  {
    name: "Computer Programming",
    image: img6,
    icon: <ComputerSvg/>,
  },
  {
    name: "Writing Composition",
    image: img7,
    icon: <WritingSvg/>,
  },
  {
    name: "Chess",
    image: img8,
    icon: <ChessSvg />,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-[32px] text-primary-black font-bold mb-2">
            Take a test, learn a new subject, or develop new skills
          </h2>
          <p className="text-alt-gray text-sm lg:text-base">
            Learn or improve in over 10 different subjects: Languages, Art &
            Drawing, Artist Lessons, Photography.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 justify-center gap-8 p-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 p-5 rounded-lg flex items-center justify-center">
                {category.icon}
              </div>
            </div>
            <p className="mt-4 text-2xl text-primary-black">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
