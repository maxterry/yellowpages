import React from "react";
import CompanyCard from "../CompanyCard";

type Company = {
  slug: string;
  name: string;
};

type CompaniesSimilarProps = {
  companies: Company[];
};

function CompaniesSimilar({ companies }: CompaniesSimilarProps) {
  return (
    <div className="companies-similar" style={{ marginTop: "5rem" }}>
      <h2>🪄️✨ Similar Companies</h2>
      <div className="companies">
        {companies.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </div>
  );
}

export default CompaniesSimilar;
