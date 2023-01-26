import React from "react";
import Head from "next/head";

const HeadMeta: React.FC = () => {
  return (
    <Head>
      <title>Tristan Brandt</title>
      <meta
        name="description"
        content="Software Engineer. Typescript Enthusiast."
      />
      <link
        rel="icon"
        href="/logo-dark.svg"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/logo-light.svg"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/logo-dark.ico"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/logo-light.ico"
        media="(prefers-color-scheme: light)"
      />
    </Head>
  );
};

export default HeadMeta;
