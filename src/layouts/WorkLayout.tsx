/* eslint-disable @next/next/no-img-element */
import cx from "classnames";
import Link from "next/link";
import React from "react";
import HeadMeta from "../components/HeadMeta";
import Social from "../components/Social";
import WorkItems from "../components/WorkItems";

interface Props {
  children?: React.ReactNode;
  contentClassName?: string;
  slug?: string;
}
const WorkLayout: React.FC<Props> = (props) => {
  return (
    <>
      <HeadMeta />

      <main className="flex min-h-[100svh] flex-col">
        <header className="fixed top-0 flex w-full flex-row-reverse items-center justify-between bg-[#21201e] p-6 px-4  sm:bg-[#282623] sm:p-8 sm:px-12 lg:bg-transparent lg:p-12">
          <Link
            href="/"
            className="hidden items-center gap-2 text-[#AAAAAA] sm:flex"
          >
            back to home
          </Link>

          <Link
            href={props.slug ? `/work` : "/"}
            className="flex items-center gap-2 text-[#AAAAAA] sm:hidden"
          >
            back to {props.slug ? "list" : "home"}
          </Link>
          <Link href="/">
            <div className="relative h-10 w-10 text-[0px] sm:h-16 sm:w-16">
              <img className="h-full w-full" src="/img/logo.svg" alt="logo" />
            </div>
          </Link>
        </header>
        <section className="flex flex-1 gap-20">
          <div
            className={cx(
              " flex-1 flex-col items-center justify-center gap-6 lg:fixed lg:top-[50%] lg:w-64 lg:translate-y-[-50%] lg:items-end lg:pr-3 xl:w-[33%]",
              {
                "hidden lg:flex": props.slug,
                flex: !props.slug,
              }
            )}
          >
            <WorkItems slug={props.slug} />
          </div>
          <div className="hidden flex-1 lg:block" />
          <div
            className={cx(
              " flex-[4] px-4  pb-20 pt-28 sm:flex sm:justify-center sm:pt-36 lg:block lg:pt-48 xl:flex-[2]",
              {
                "hidden lg:block": !props.slug,
              },
              props.contentClassName
            )}
          >
            <div
              className={
                "prose prose-invert max-w-full prose-headings:font-medium prose-headings:text-neutral-300 prose-p:text-neutral-400 prose-a:text-sky-600 prose-a:no-underline sm:max-w-[65ch] prose-li:text-neutral-400"
              }
            >
              {props.children}
            </div>
          </div>
        </section>
        <footer className="fixed bottom-0 z-10 flex w-full items-end justify-center gap-4 bg-[#21201e] py-4 sm:bg-[#282623]">
          <Social />
        </footer>
      </main>
    </>
  );
};

export default WorkLayout;
