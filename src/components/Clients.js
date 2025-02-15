// src/components/Clients.js
import React from "react";
import styled from "styled-components";
import westpaclogo from "../assets/client-logo/westpaclogo.png";
import atmabodhlogo from "../assets/client-logo/atmabodhlogo.png";
import chillimasalalogo from "../assets/client-logo/chillimasalalogo.png";
import adyopantlegallogo from "../assets/client-logo/adyopantlegallogo.png";
import {
  Heading,
  HeroSection,
  CallToActionButton,
  PageContainer,
  Subheading,
  Paragraph,
  roll,
} from "../GlobalStyle.js";

const ClientsSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.low} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  text-align: center;

  @media (max-width: 768px) {
    max-height: 100px;
    flex-direction: column;
    align-items: center;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  margin-bottom: ${({ theme }) => theme.spacing.container};
  font-size: 1.5rem;
  font-weight: bold;
`;

const ClientsList = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: row; // Change to row for smaller screens
    align-items: center;
  }
`;

const ClientLogo = styled.img`
  max-width: 225px; // Adjust based on actual logo sizes
  height: 220px;
  object-fit: contain;
  //filter: grayscale(100%); // Makes the logos monochrome
  //transition: filter 0.3s ease;

  //  &:hover {
  //   filter: grayscale(10);
  // }

  @media (max-width: 768px) {
    max-width: 90px;
    height: 100px;
  }
`;

const Clients = () => {
  return (
    <ClientsSection>
      <ClientsList>
        {/* Repeat ClientLogo for each client */}
        <ClientLogo src={westpaclogo} alt="Westpac" />
        <ClientLogo src={chillimasalalogo} alt="Chillimasala" />
        <ClientLogo src={adyopantlegallogo} alt="Adyopant" />
        <ClientLogo src={atmabodhlogo} alt="Atmabodh" />
        {/* Add more as needed */}
      </ClientsList>
    </ClientsSection>
  );
};

export default Clients;
