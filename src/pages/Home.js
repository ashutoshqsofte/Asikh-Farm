import React from "react";
import { Link } from "react-router-dom";
import Clients from "../components/Clients";
import Services from "./Services";
import { useNavigate } from "react-router-dom";

import {
  Heading,
  HeroSection,
  CallToActionButton,
  PageContainer,
  Subheading,
  Paragraph,
  StickyFooter,
  Spacer,
} from "../GlobalStyle.js";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection>
        <Heading>Your Technology Partner</Heading>
      </HeroSection>
      <PageContainer>
        <Subheading>Innovate. Elevate. Excel.</Subheading>
        <Paragraph>
          Dive into a partnership with Qsofte, where passion meets precision and
          diversity drives innovation. Tailored expertise for unmatched
          efficiency and breakthrough growth. Your goals, our mission. Together,
          we don’t just reach targets—we set new benchmarks.
        </Paragraph>
        <Spacer></Spacer>
        <CallToActionButton onClick={() => navigate("/Connect")}>
          Let's Connect
        </CallToActionButton>
        <StickyFooter>
          <Clients></Clients>
        </StickyFooter>
      </PageContainer>
    </>
  );
}

export default Home;
