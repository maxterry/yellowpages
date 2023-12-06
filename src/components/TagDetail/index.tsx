import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ThemeContext } from "../../ThemeContext";

import { CompanyData } from "../CompanyData";
import { TagData } from "../TagData";

import Header from "../Header";
import Footer from "../Footer";

import CompanyCardList from "../CompanyCardList";
import CompanyTagMarquee from "../CompanyTagMarquee";
import "../CompanyTags/style.css";

import "./style.css";

function TagDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { darkMode } = useContext(ThemeContext);

  const tag = TagData.find((tag) => tag.slug === slug);
  if (!tag) {
    return <div>Tag not found</div>;
  }

  const filteredCompanies = CompanyData.filter((company) =>
    company.tags.some((tag) => tag === slug),
  );

  return (
    <div>
      <Header></Header>
      <main className={!darkMode ? "lightMode" : "darkMode"}>
        <div className="tag-name">
          <h1>
            {tag.emoji && <span className="tag-emoji">{tag.emoji}</span>}
            <div className="company-tag visited">{tag.name}</div>
          </h1>
        </div>
        <div className="tag-description">{tag.description}</div>
        <CompanyCardList companies={filteredCompanies} includeTags={false} />
        <CompanyTagMarquee companies={CompanyData} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default TagDetail;
