import Link from "next/link";
import React from "react";
import workItems from "../data/workItems";
import cx from "classnames";

interface Props {
  slug?: string;
}

const WorkItems: React.FC<Props> = (props) => {
  return (
    <>
      {workItems.map((item) => (
        <Link
          className={cx(
            " text-xl transition-all hover:text-[#ddd] lg:text-2xl",
            {
              "text-[#fff]": item.slug === props.slug,
              "text-[#999]": item.slug !== props.slug,
            }
          )}
          href={`/work/${item.slug}`}
          key={item.slug}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default WorkItems;
