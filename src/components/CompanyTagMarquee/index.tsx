import React from "react";
import Marquee from "react-fast-marquee";

import { TagData } from "../TagData";
import "../CompanyTags/style.css";
import "./style.css";

// type Tag = {
//   name: string;
//   slug: string;
// };

type CompanyTagMarqueeProps = {
  companies: {
    tags: string[];
  }[];
};

function CompanyTagMarquee({ companies }: CompanyTagMarqueeProps) {
  // Dedup tags
  const uniqueTags = Array.from(
    new Set(companies.flatMap((company) => company.tags)),
  );
  return (
    <div className="company-tag-marquee">
      <Marquee direction="left" className="marquee" speed={40}>
        {uniqueTags.map((tagSlug, index) => {
          const tag = TagData.find((tag) => tag.slug === tagSlug);
          return (
            <a
              key={index}
              className="company-tag marquee-tag"
              href={`/tag/${tag?.slug}`}
            >
              {tag?.name}
            </a>
          );
        })}
      </Marquee>
    </div>
  );
}

export default CompanyTagMarquee;
