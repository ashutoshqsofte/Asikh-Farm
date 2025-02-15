// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";
import { Button } from "@mui/material";
import backgroundImage from "./assets/hero-3.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; // Choose your font
    background-color: ${({ theme }) => theme.colors.lightBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  // Add other global styles you might need
`;

export const Heading = styled.h1`
  color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
  font-size: 3.5rem;
  margin-top: 150px;
  margin-bottom: 20px;
  margin-left: 35px;
  text-align: center;
  align-self: flex-start;
  font-weight: bolder;
  margin-bottom: 76px;

  @media (max-width: 768px) {
    font-size: 3.1rem; // Reduced font size for small screens
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.light};
  min-height: auto;
  text-align: justify;
`;

export const Subheading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

export const Subheading1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  margin-left: 15%;
  line-height: 1.8;
  font-size: 1.3rem;
  font-weight: semi bold;

  @media (max-width: 768px) {
    font-size: 1.1rem; // Reduced font size for small screens
  }
`;

export const Highlight = styled.span`
  color: #1976d2;
`;

export const CallToActionButton = styled(Button)`
  && {
    display: inline-block;
    max-width: 200px;
    margin-top: 30px;
    margin: 0 auto;
    padding: 10px 30px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
    }
    @media (max-width: 768px) {
    } // Adjust as needed
  }
`;
export const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  color: white;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
`;
export const ImageSection = styled.section`
  width: 50%;
  height: 500px; // Adjust as needed
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: right;
`;

export const StickyFooter = styled.div`
  bottom: 0;
  width: 100%;
  @media (max-width: 768px) {
    height: 10%;
  } // Adjust as needed
`;

export const Spacer = styled.div`
  margin: ${({ top = "20px", bottom = "20px" }) => `${top} 0 ${bottom} 0`};
  @media (max-width: 768px) {
    height: 5px;
  } // Adjust as needed
`;

export const roll = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyle;
