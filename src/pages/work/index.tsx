import React from "react";
import WorkLayout from "../../layouts/WorkLayout";

const WorkHome: React.FC = (props) => {
  return (
    <WorkLayout contentClassName="!pt-24">
      <div className=" flex flex-col items-start  opacity-60">
        <div>
          <p>Hey there 👋</p>

          <p>I couldn&apos;t figure out a decent placeholder for this screen. It&apos;s getting late and its really not that important, so here we are.</p>

          <p>I guess I can tell you a bit about myself. I love coding, been doing it since I was a kid. I love math, but the love is not reciprocated. I enjoy playing piano and I consume
            books and coffee with equal fervor.</p>

          <p>As for tech, I&apos;ve been tinkering with JavaScript and its various flavors and frameworks for about a decade now. Damn, that&apos;s actually a long time. </p>

          <p>Anywho, React is my go-to for pretty much everything. For backend, you guessed it: Node.js. Although I&apos;ve been doing a ton of Java lately.
            Next.js is great, Bun is awesome, SurrealDB is insane. </p>

          <p>If you&apos;re actually interested in these things, get in touch with me through the links below. I&apos;d gladly talk your ear off about them.</p>

          <p>Otherwise check the links to your left for some of the projects I&apos;ve worked on. They&apos;re pretty cool, I promise.</p>

          <p>lorem ipsum dolor... you know the rest.</p>

          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </WorkLayout>
  );
};

export default WorkHome;
