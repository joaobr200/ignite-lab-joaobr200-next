import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { client } from "../../../lib/apollo";
import {
  GetAllSlugsLessonsQuery,
  Lesson,
  GetLessonBySlugQuery,
} from "../../../graphql/generated";

import Layout from "../../../components/Layout";
import Video from "../../../components/Video";

interface ContextStaticProps extends GetStaticPropsContext {
  params: {
    slug: string;
  };
}

export const getStaticProps = async (ctx: ContextStaticProps) => {
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
    <Layout>
      {lesson ? <Video {...lesson} /> : <div className="flex flex-1"></div>}
    </Layout>
  );
};

export default Lesson;
