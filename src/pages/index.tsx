/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import { VscCode } from "react-icons/vsc";
import Social from "../components/Social";
import Link from "next/link";
import HeadMeta from "../components/HeadMeta";
import { useEffect, useState } from "react";
import cx from "classnames";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const img = document.createElement("img");

    const timeout = setTimeout(() => {
      setReady(true);
    }, 10);
    img.src = "/img/me.jpeg";

    img.onload = () => {
      clearTimeout(timeout);
      setShow(true);
    };
  }, []);

  return (
    <>
      <HeadMeta />
      <main
        className={cx(
          "relative flex h-[100svh]  w-screen flex-col bg-[url('/img/me.jpeg')] bg-contain bg-right bg-no-repeat transition-all duration-100",
          {
            "bg-top-[-1000px]": !show,
            "opacity-100": ready || show,
            "opacity-0": !ready && !show,
          }
        )}
      >
        <div
          className={cx(
            "pointer-events-none absolute top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#21201Eff] transition-all duration-500 sm:bg-[#282623ff]",
            {
              "opacity-0": show,
              hidden: !ready,
            }
          )}
        >
          <div
            className={cx("lds-ellipsis", {
              hidden: show,
            })}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="absolute right-0 aspect-[1709/3080] h-[100svh] ">
          <div className={cx("relative h-full w-full")}>
            <div className="absolute top-[50%] h-full max-h-[calc(100svw_*_1.803)] w-full translate-y-[-50%]  bg-[#111111] opacity-90 sm:opacity-[.86]"></div>
            <div className="absolute top-0 h-full w-28 bg-gradient-to-r from-[#21201Eff] to-[#21201E00] sm:from-[#282623ff] sm:to-[#28262300]"></div>
          </div>
        </div>
        <div className="z-10 flex w-full flex-1 items-center justify-center xl:w-[50%]">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="relative h-16 w-16 text-[0px] sm:h-28 sm:w-28">
                <img className="h-full w-full" src="/img/logo.svg" alt="logo" />
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

            <span className="text-md  pt-1 pl-4 font-sans  text-[#ddd] sm:hidden">
              Software Engineer. Typescript Enthusiast.
            </span>

            <Link href="/work" className="group mt-8 block sm:mt-12">
              <div className="border-1 flex items-center gap-2 border   border-transparent py-3 px-4 text-sky-500 transition-all group-hover:border-sky-500">
                <VscCode size={24} />
                <span className="text-lg font-semibold uppercase tracking-wider">
                  My Work
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="z-10 flex items-end justify-center gap-4 py-4">
          <Social />
        </div>
      </main>
    </>
  );
};

export default Home;
