import React from "react";
import CompanyCard from "../CompanyCard";

type Company = {
  slug: string;
  name: string;
};

type CompanyCardListProps = {
  companies: Company[];
  includeTags?: boolean;
};

function CompanyCardList({
  companies,
  includeTags = true,
}: CompanyCardListProps) {
  return (
    <div className="companies">
      {companies.map((company) => (
        <CompanyCard
          key={company.slug}
          company={company}
          includeTags={includeTags}
        />
      ))}
    </div>
  );
}

export default CompanyCardList;
