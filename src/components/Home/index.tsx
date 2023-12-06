import React, { useContext } from "react";

import { ThemeContext } from "../../ThemeContext";

import Header from "../Header";
import Footer from "../Footer";

import CompanyCardList from "../CompanyCardList";
import "../CompanyCardList/style.css";
import { CompanyData } from "../CompanyData";
import CompanyTagMarquee from "../CompanyTagMarquee";

import "./style.css";

function Home() {
  // Determine day of week
  const today = new Date().toLocaleDateString("en", { weekday: "long" });
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <Header></Header>
      <main className={darkMode ? "darkMode" : "lightMode"}>
        <CompanyTagMarquee companies={CompanyData} />
        <h2>Featured this {today}</h2>
        <CompanyCardList companies={CompanyData} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
