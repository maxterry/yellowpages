import React, { useContext } from "react";

import "./style.css";

import { ThemeContext } from "../../ThemeContext";
import { TagData } from "../TagData";

// type Tag = {
//   slug: string;
//   name: string;
// };

type CompanyTagsProps = {
  tags: string[];
};

function CompanyTags({ tags, includeEmoji = false }: CompanyTagsProps) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={"company-tags " + (darkMode ? "darkMode" : "lightMode")}>
      {tags.map((tagSlug, index) => {
        const tag = TagData.find((tag) => tag.slug === tagSlug);
        return (
          <a key={index} href={`/tag/${tag?.slug}`} className="company-tag">
            {includeEmoji && tag?.emoji && (
              <span className="tag-emoji">tag?.emoji</span>
            )}
            {tag?.name}
          </a>
        );
      })}
    </div>
  );
}

export default CompanyTags;
