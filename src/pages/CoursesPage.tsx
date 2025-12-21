import bgCourses from "../assets/img/bg-courses.jpg";
import { useState } from "react";
import CourseSection from "../components/CourseSection";
import CourseModal from "../components/CourseModal";
import { courses, type Course } from "../data/courses.data";

const CoursesPage = () => {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-[#fefbf3]">
      <section
        className="flex justify-center flex-col  relative py-28 min-h-screen bg-[#4f2d20] text-[#f9f3e9] bg-fixed "
        style={{
          backgroundImage: `url(${bgCourses})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>

        <div className="  relative max-w-360 mx-auto px-4 text-center ">
          <p className="text-sm uppercase tracking-widest opacity-80">
            Coffee education
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Barista Courses
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-xl opacity-90">
            Learn the art of coffee brewing — from espresso basics to advanced
            latte art and alternative methods.
          </p>

          <a
            href="#courses"
            className="inline-block mt-10 px-8 py-3 rounded-full border border-[#f9f3e9]
             hover:bg-[#f9f3e9] hover:text-[#4f2d20] transition"
          >
            View courses
          </a>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="max-w-360 mx-auto px-4">
          <h3 className="text-3xl font-bold text-[#4f2d20] text-center">
            Our courses
          </h3>

          <div className="mt-16 space-y-24">
            {courses.map((course, index) => (
              <CourseSection
                key={course.id}
                title={course.title}
                level={course.level}
                description={course.description}
                image={course.image}
                duration={course.duration}
                lessons={course.lessons}
                reverse={index % 2 === 1}
                onLearnMore={() => setActiveCourse(course)}
              />
            ))}
          </div>
        </div>
      </section>
      {activeCourse ? (
        <CourseModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
        />
      ) : null}
    </div>
  );
};

export default CoursesPage;
