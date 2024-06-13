import React from "react";
import Section1 from "./Body/Section1/Section1";
import Section2 from "./Body/Section2/Section2";
import Section3 from "./Body/Section3/Section3";
import Section4 from "./Body/Section4/Section4";
import Section5 from "./Body/Section5/Section5";
import Section6 from "./Body/Section6/Section6";
import Header from "../../components/SubHeader/index";
import Footer from "../../components/SubFooter/index";

function PeopleWithDisabilities() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default PeopleWithDisabilities;
