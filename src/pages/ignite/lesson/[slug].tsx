import { gql } from "@apollo/client";
import { GetStaticPaths } from "next";
import { client } from "../../../lib/apollo";
import {
  GetAllSlugsLessonsQuery,
  Lesson,
  GetLessonBySlugQuery,
} from "../../../graphql/generated";

import Sidebar from "../../../components/Sidebar";
import Video from "../../../components/Video";
import Header from "../../../components/Header";
export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await client.query<GetLessonBySlugQuery>({
    query: gql`
      query GetLessonBySlug($slug: String) {
        lesson(where: { slug: $slug }) {
          id
          title
          videoId
          description
          teacher {
            avatarURL
            bio
            name
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return {
    props: {
      lesson: data.lesson,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetAllSlugsLessonsQuery>({
    query: gql`
      query GetAllSlugsLessons {
        lessons {
          slug
        }
      }
    `,
  });

  const paths = data.lessons.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface LessonProps {
  lesson: Lesson;
}

const Lesson = ({ lesson }: LessonProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {lesson ? <Video {...lesson} /> : <div className="flex flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
};

export default Lesson;
