import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { ThemeContext } from "../../ThemeContext";

import generateGradientDataURL from "../../util";

import { CompanyData } from "../CompanyData";

import Header from "../Header";
import Footer from "../Footer";

import "../CompanyCard/style.css";
import CompanyLocations from "../CompanyLocations";
import CompanyTags from "../CompanyTags";
import CompaniesSimilar from "../CompaniesSimilar";

import "./style.css";

type Company = {
  slug: string;
  name: string;
};

function CompanyDetail({ includeTags = true }: { includeTags?: boolean }) {
  const { slug } = useParams<{ slug: string }>();

  const placeholderDataURL = generateGradientDataURL();

  const company = CompanyData.find((company) => company.slug === slug);

  const similarCompanies: Company[] = [];

  const currentCompanyTags = company.tags;

  CompanyData.forEach((otherCompany) => {
    if (otherCompany.slug !== company.slug) {
      const hasCommonTag = otherCompany.tags.some((tag) =>
        currentCompanyTags.includes(tag),
      );
      if (hasCommonTag) {
        similarCompanies.push(otherCompany);
      }
    }
  });

  if (!company) {
    // Handle the case when company details are not available
    return <div>Company details not found</div>;
  }

  const { darkMode } = useContext(ThemeContext);
  const position = [51.505, -0.09];
  return (
    <div>
      <Header></Header>
      <main className={darkMode ? "darkMode" : "lightMode"}>
        <div key={company.slug} className="company">
          <div className="company-detail">
            <div className="company-info">
              <div className="company-logo">
                {company.logo ? (
                  <img src={company.logo} alt={company.name + " Logo"} />
                ) : (
                  <img
                    src={placeholderDataURL}
                    alt={company.name + " Placeholder"}
                  />
                )}
              </div>
              <div className="company-name">
                <big>{company.name}</big>
              </div>
            </div>
            <div className="company-domain">{company.domain}</div>
            <div className="company-description">{company.description}</div>
            <div className="company-screenshot">
              {company.screenshot ? (
                <img
                  src={company.screenshot}
                  alt={company.name + " Screenshot"}
                />
              ) : (
                <img
                  src={placeholderDataURL}
                  alt={company.name + " Placeholder"}
                />
              )}
            </div>
          </div>
          {includeTags && <CompanyTags tags={company.tags} />}
          <div className="company-fields">
            {company.founder && (
              <div className="">
                <dt>Founder</dt>
                <dd>{company.founder}</dd>
              </div>
            )}
            {company.founded && (
              <div className="">
                <dt>Founded</dt>
                <dd>
                  {new Date(company.founded).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </dd>
              </div>
            )}
          </div>
          <CompanyLocations company={company} />
        </div>
        {similarCompanies.length > 0 && (
          <CompaniesSimilar companies={similarCompanies} />
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default CompanyDetail;
