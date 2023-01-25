import { type NextPage } from "next";
import Head from "next/head";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlScreenDesktop,
} from "react-icons/sl";
import { VscCode } from "react-icons/vsc";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tristan Brandt</title>
        <meta name="description" content="Tristan Brandt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex h-[100svh] w-screen flex-col bg-[url('/img/me2.jpeg')] bg-contain bg-right bg-no-repeat">
        <div className="absolute right-0 aspect-[1709/3080] h-[100svh] ">
          <div className="relative h-full w-full">
            <div className="h-full w-full bg-[#111111] opacity-90 sm:opacity-[.86]"></div>
            <div className="absolute top-0 h-full w-28 bg-gradient-to-r from-[#21201Eff] to-[#21201E00] sm:from-[#282623ff] sm:to-[#28262300]"></div>
          </div>
        </div>
        <div className="z-10 flex w-full flex-1 items-center justify-center xl:w-[50%]">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image fill src="/img/logo.svg" alt="logo" />
              </div>
              <div className="ml-2 flex flex-col sm:ml-6 sm:pt-2">
                <span className=" font-sans text-3xl font-light text-[#ddd] sm:text-6xl sm:text-[#bbb]">
                  Tristan Brandt
                </span>
                <span className="hidden pt-1 pl-1 font-sans text-lg tracking-wider text-[#aaa] sm:block">
                  Software Engineer. Typescript Enthusiast.
                </span>
              </div>
            </div>

            <span className="text-md mt-8 pt-1 pl-1 font-sans  text-[#ddd] sm:hidden">
              Software Engineer. Typescript Enthusiast.
            </span>

            <a href="#" className="group mt-20 block sm:mt-12">
              <div className="border-1 flex items-center gap-2 border   border-transparent py-3 px-4 text-sky-500 transition-all group-hover:border-sky-500">
                <VscCode size={24} />
                <span className="text-lg font-semibold uppercase tracking-wider">
                  My Work
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="z-10 flex items-end justify-center gap-4 py-6">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tristandev/"
          >
            <SlSocialLinkedin color="#ccc" size={24} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/tristanbrandt014/"
          >
            <SlSocialInstagram color="#ccc" size={20} />
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
