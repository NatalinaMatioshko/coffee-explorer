import type { Course } from "../data/courses.data";
import { useEffect } from "react";

type CourseModalProps = {
  course: Course;
  onClose: () => void;
};

export default function CourseModal({ course, onClose }: CourseModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-100">
      {/* backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
        aria-label="Close modal"
      />

      {/* panel */}
      <div className="relative mx-auto mt-24 w-[min(720px,92vw)] max-h-[80vh] overflow-auto rounded-2xl bg-[#fefbf3] p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#7c4936]">
              {course.level}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[#4f2d20]">
              {course.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs text-[#4f2d20]">
                {course.duration}
              </span>
              <span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs text-[#4f2d20]">
                {course.lessons} lessons
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 rounded-full border border-amber-200 bg-white text-[#4f2d20] hover:border-[#4f2d20] transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-neutral-700">
          {course.description}
        </p>

        <h4 className="mt-6 text-sm font-semibold tracking-wide text-[#4f2d20] uppercase">
          What you’ll learn
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
          {course.syllabus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#4f2d20] px-6 py-3 text-sm text-[#fefbf3] hover:opacity-90 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
