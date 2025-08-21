import Heading from "../Tags/Heading/Heading";
import Image from "../Tags/Image/Image";
// import Paragraph from "../Tags/Paragraph/Paragraph";
import Button from "../Tags/Button/Button";

interface BecomeATecherSchema {
  bgImgUrl: string;
  title?: string;
  subTitle: string;
  descreption: string;
  features?: string[];
  btnTxt: string;
  isHome: boolean;
}

const BecomeATecher: React.FC<BecomeATecherSchema> = ({
  bgImgUrl,
  title,
  subTitle,
  descreption,
  // features,
  btnTxt,
  isHome,
}) => {
  return (
    <section className={`w-full relative pb-0 lg:pb-14 xl:pb-[120px] mb-5 `}>
      <div
        className={`container mx-auto flex flex-col justify-center md:flex-row relative ${
          isHome ? "max-h-[787px]" : "h-[553px]"
        }`}
      >
        <Image
          Src={bgImgUrl}
          className="rounded-tl-[12px] rounded-bl-[12px] hidden xl:block object-cover w-full xl:w-1/2"
          Alt="not found"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="h-auto w-auto py-10 xl:py-[116px] bg-primary-blue relative px-8 flex flex-col rounded-[12px] xl:rounded-r-[12px] xl:rounded-l-none gap-y-5 xl:gap-y-10"
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
              {isHome && (
                <Heading
                  Txt={title}
                  Variant="h6"
                  className="text-2xl text-secondary-white font-[600] leading-[150%]"
                />
              )}
              <Heading
                Txt={subTitle}
                Variant="h3"
                className=" text-[30px] xl:text-[44px] 2xl:text-[64px] max-w-[562px] text-secondary-white font-bold leading-[150%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4  xl:gap-y-8">
            <div
              data-aos="fade-up"
              className="max-w-[629px] text-lg text-secondary-white font-normal leading-[150%]"
              dangerouslySetInnerHTML={{ __html: descreption }}
            />
            <Button className="linear-btn py-3 xl:py-6" Txt={btnTxt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeATecher;
