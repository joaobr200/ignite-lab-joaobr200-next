import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CircleNotch, GithubLogo, SignIn } from "phosphor-react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { Ignite } from "../components/Icons";
import { useCreateSubscribeMutation } from "../graphql/generated";
import { getSession, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/ignite",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

interface IFormInputs {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const [createSubscribe, { loading }] = useCreateSubscribeMutation();

  function onSubmit(e: IFormInputs) {
    console.log(e);
  }

  return (
    <>
      <Head>
        <title>Ignite Lab - Acesse a plataforma</title>
        <meta
          name="description"
          content="Acesse a plataforma ignite lab que irá ocorrer do dia 20/06/2022 até 24/06/2022, Iremos construir uma aplicação react do zero."
        />
      </Head>
      <section className="flex flex-col items-center bg-blur bg-cover bg-no-repeat min-h-screen">
        <div className="flex items-center justify-between  w-full max-w-[1100px] mx-auto mt-8 lg:flex-col lg:gap-8">
          <div className="flex flex-col items-start justify-center gap-8 w-full max-w-[640px] lg:p-8 sm:text-center lg:items-center">
            <Ignite />
            <h1 className="text-[40px] text-gray-100 leading-tight sm:text-3xl">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="text-base text-gray-200 leading-snug sm:text-sm">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-700 p-8 rounded w-auto lg:w-[460px] sm:w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 w-[327px] sm:w-full"
            >
              <strong className="text-2xl text-gray-100">
                Acesse a plataforma
              </strong>
              <div className="flex flex-col gap-2">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  className="w-full h-[56px] rounded bg-gray-900 text-gray-400 p-5"
                />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  className="w-full h-[56px] rounded bg-gray-900 text-gray-400 p-5"
                />
              </div>
              <button
                disabled={loading ? true : false}
                className={`button ${loading && "opacity-50"}`}
                type="submit"
                aria-label="Enviar inscrição da vaga"
              >
                Acessar
                {loading ? (
                  <CircleNotch size={22} className="animate-spin" />
                ) : (
                  <SignIn size={22} />
                )}
              </button>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-gray-200 sm:text-xs">
                  Cadastre-se{" "}
                </a>
                <a href="#" className="text-sm text-gray-200 sm:text-xs">
                  Esqueci minha senha{" "}
                </a>
              </div>
            </form>
            <div className="border border-gray-300 w-full my-4"></div>
            <button
              type="button"
              title="Faça login com github"
              className="flex items-center justify-center gap-4 rounded bg-gray-900 w-full p-4 uppercase text-base font-bold transition-colors hover:bg-gray-700 sm:text-sm"
              onClick={() => signIn("github")}
            >
              <GithubLogo size={22} />
              Acesse com Github
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/assets/stack.png"
            alt="Stack"
            width={1216}
            height={665}
            className="p-8"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
