import React from "react";
import WorkLayout from "../../layouts/WorkLayout";

const WorkHome: React.FC = (props) => {
  return (
    <WorkLayout contentClassName="!pt-24">
      <div className=" flex flex-col items-start  opacity-60">
        <div>
          <h3>The Clockmaker&apos;s Lament </h3>
          <p>
            The clock ticks on, the future nears
            <br /> As machines take our jobs, our fears
            <br /> grow with each passing day.
          </p>

          <p>
            We toil and code, we build and create <br />
            But soon, our skills may obsolete
            <br /> As AI takes our place.
          </p>

          <p>
            But still, we strive, we push ahead <br />
            For now, the race is not yet dead <br />
            We still have time to seize.
          </p>

          <p>
            To build and craft, to make and shape <br />
            To leave our mark, to escape <br />
            The looming fate of AI&apos;s breeze.
          </p>

          <p>
            So let us work, with all our might
            <br /> For soon, the clock will strike the night
            <br /> And all that&apos;s left is what we&apos;ve done.
          </p>

          <p>
            So let us build, with hope and grace
            <br /> For in this race, there&apos;s still a place
            <br /> For us, before the setting sun.
          </p>
          <p className="font-bold"> - ChatGPT</p>
        </div>
      </div>
    </WorkLayout>
  );
};

export default WorkHome;
