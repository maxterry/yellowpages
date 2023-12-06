import React from "react";

import generateGradientDataURL from "../../util";
import CompanyTags from "../CompanyTags";
import "./style.css";

type CompanyCardProps = {
  company: {
    slug: string;
    screenshot?: string;
    logo?: string;
    logoUrl?: string;
    name: string;
    description: string;
    tags: Array<{ slug: string; name: string }>;
  };
  includeTags?: boolean;
};

function CompanyCard({ company, includeTags = true }: CompanyCardProps) {
  const placeholderDataURL = generateGradientDataURL();

  return (
    <div key={company.slug} className="company">
      <a href={"/company/" + company.slug} className="company-screenshot">
        {company.screenshot ? (
          <img src={company.screenshot} alt={company.name + " Screenshot"} />
        ) : (
          <img src={placeholderDataURL} alt={company.name + " Placeholder"} />
        )}
      </a>
      <a href={"/company/" + company.slug} className="company-info">
        <div className="company-logo">
          {company.logo ? (
            <img src={company.logo} alt={company.name + " Logo"} />
          ) : (
            <img src={placeholderDataURL} alt={company.name + " Placeholder"} />
          )}
        </div>
        <div className="company-name">
          <span>{company.name}</span>
        </div>
      </a>
      <a href={"/company/" + company.slug} className="company-description">
        {company.description}
      </a>
      {includeTags && <CompanyTags tags={company.tags} />}
    </div>
  );
}

export default CompanyCard;
