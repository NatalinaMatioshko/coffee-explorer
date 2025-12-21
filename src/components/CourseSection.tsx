import { useInView } from "../hooks/useInView";

type CourseSectionProps = {
  title: string;
  level: string;
  description: string;
  image: string;
  duration: string;
  lessons: number;
  reverse?: boolean;
  onLearnMore?: () => void;
};

const CourseSection = ({
  title,
  level,
  description,
  image,
  duration,
  lessons,
  reverse = false,
  onLearnMore,
}: CourseSectionProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`grid items-center gap-12 md:grid-cols-2 transition-all duration-700
  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
     
      <div className={`max-w-xl ${reverse ? "md:order-2" : "md:order-1"}`}>
        <p className="mb-3 text-sm uppercase tracking-widest text-[#7c4936]">
          {level}
        </p>

        <h3 className="mb-5 text-3xl font-light text-[#4f2d20]">{title}</h3>


        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs text-[#4f2d20]">
            {duration}
          </span>
          <span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs text-[#4f2d20]">
            {lessons} lessons
          </span>
        </div>

        <p className="mb-6 text-[#4f2d20] leading-relaxed">{description}</p>

        <button
          type="button"
          // onClick={onLearnMore ?? undefined}
          onClick={() => onLearnMore?.()}
          className="inline-flex items-center gap-2 rounded-full border border-[#4f2d20] px-6 py-3 text-sm text-[#4f2d20]
transition hover:bg-[#4f2d20] hover:text-[#f9f3e9] active:scale-[0.98]"
        >
          Learn more
        </button>
      </div>

  
      <div
        className={`overflow-hidden rounded-2xl ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-105 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CourseSection;
