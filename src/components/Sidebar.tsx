import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";
import LessonSkeleton from "./Shimmer/LessonSkeleton";

const Sidebar = () => {
  const { isOpen } = useContext(MenuContext);
  const { data, loading } = useGetLessonsQuery();

  return (
    <aside
      className={`w-[21.75rem] h-full bg-gray-700 p-6 border-l z-[40] border-gray-600 lg:absolute lg:right-0  lg:h-screen lg:pb-[100px] lg:overflow-auto   ${
        isOpen ? "lg:animate-fadeIn" : "lg:hidden"
      }`}
    >
      <span className="text-2xl font-bold text-start border-b border-gray-500 py-6 mb-6 block">
        Cronograma de aulas
      </span>
      {loading ? (
        <LessonSkeleton />
      ) : (
        <>
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                type={lesson.lessonType}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
              />
            );
          })}
        </>
      )}
    </aside>
  );
};

export default Sidebar;
