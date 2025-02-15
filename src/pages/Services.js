import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Collapse } from '@mui/material';
import styled from 'styled-components';
import technologyConsultancyImage from '../assets/img-services/consultancy.jpeg';
import posImage from '../assets/img-services/pos.jpeg';
import webDevelopmentImage from '../assets/img-services/webdevelopment.jpeg';
import openEmrImage from '../assets/img-services/openemr.jpeg';
import testingImage from '../assets/img-services/testing.jpeg';
import { darken, lighten } from 'polished';
import {
  Heading,
  HeroSection,
  CallToActionButton,
  PageContainer,
  Subheading,
  Paragraph,
} from '../GlobalStyle.js';

const CustomContainer = styled(Container)`
  margin-top: 10px;
  padding-top: 60px;
  @media (max-width: 600px) {
    padding-top: 20px; // Adjust padding for small screens
  }
`;
/*const Heading = styled.h1`
  color: ${({ theme }) => darken(0.2, theme.colors.secondary)};
  font-size: 1.5;
  text-align: center;
  align-self: flex-start;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 1.5rem; // Adjust font size for small screens
    margin-left: 10px; // Adjust margin for small screens
  }
`;*/
const ServiceCard = styled(Card)`
  display: flex; /* This makes the card flex container */
  margin: 20px 0;
  align-items: center; /* Aligns items vertically in the center */
  width: 100%; /* Sets the width to 75% of the screen */
  margin-left: auto; /* Centers the card horizontally */
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.lightbackground};

  &:nth-child(even) {
    flex-direction: row;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  @media (max-width: 600px) {
    // Adjusts layout for screens narrower than 600px
    flex-direction: column !important; // Stacks the media and content vertically on small screens
    width: 100%; // Sets the width to 100% on small screens
  }
`;

const CardContentFlex = styled(CardContent)`
  flex: 1; /* Allows the content to fill the available space */
  background-color: ${({ theme }) => theme.colors.light};

  @media (max-width: 600px) {
    padding: 0 0 0; // Adds padding for better readability on small screens
  }
`;

function Services() {
  const services = [
    {
      title: 'Technology Consultancy',
      description: [
        "Expert Guidance: Streamline your tech journey with Qsofte's seasoned consultants.",
        'Innovative Solutions: Harness the latest technologies to elevate your business.',
        'Enhanced Efficiency: Optimize operations for peak performance.',
        'Strategic Exploration: Uncover and seize new technological opportunities.',
        'Empowerment: Make informed decisions that propel progress.',
        'Dynamic Transformation: Partner with Qsofte for a future-proof digital evolution.',
      ],
      imageUrl: technologyConsultancyImage,
      alt: 'Technology Consultancy',
    },
    {
      title: 'Retail POS Solutions',
      description:[
        'Revolutionize your retail operations with our cutting-edge Retail POS Solutions.',
        'efficient inventory management, and enhanced customer experiences.',
        'Whether you are a small boutique or a large retail chain, our solutions provide the flexibility and scalability to grow with your business.',
      ],
      imageUrl: posImage,
      alt: 'Retail POS Solutions',
    },
    {
      title: 'Website and App Development',
      description:[
        'Qsofte offers comprehensive Website and App Development services to bring your digital vision to life.',
        'Our talented team of developers and designers creates custom websites and mobile applications that are visually appealing, user-friendly, and fully optimized for performance.',
        'From e-commerce platforms to corporate websites and innovative mobile apps, we build solutions that drive engagement, improve user experience, and deliver measurable results.',
        'Let us help you establish a strong online presence and connect with your audience effectively.',
      ],
      imageUrl: webDevelopmentImage,
      alt: 'Website and App Development',
    },
    {
      title: 'OpenEMR Solutions',
      description:[
        'Transform your healthcare practice with our OpenEMR Solutions.',
        'ur expertise in Electronic Medical Records (EMR) ensures that you have a robust, secure, and compliant system for managing patient information.',
        'We customize OpenEMR to meet the specific needs of your practice, improving workflow efficiency, enhancing patient care, and ensuring data accuracy.',
        'With Qsofte, you get a trusted partner dedicated to helping you navigate the complexities of healthcare technology and achieve operational excellence.',
      ],
        imageUrl: openEmrImage,
      alt: 'OpenEMR Solutions',
    },
    {
      title: 'Testing Services',
      description:[
        'Ensure the quality and reliability of your software with our comprehensive Testing Services.',
        'Our rigorous testing processes cover functional, performance, security, and usability testing to identify and address potential issues before they impact your users.',
        'We use advanced tools and methodologies to deliver thorough and accurate results, ensuring your software meets the highest standards of quality.',
        'Trust Qsofte to provide reliable testing solutions that enhance your software and its performance and reliability.',
      ],
        imageUrl: testingImage,
      alt: 'Testing Services',
    },
  ];

  const [expanded, setExpanded] = useState(services.map(() => false));

  const handleExpandClick = (i) => {
    setExpanded(expanded.map((x, j) => (i === j ? !x : x)));
  };
  return (
    <>
      <HeroSection>
        <Heading>Our Services</Heading>
      </HeroSection>

      <PageContainer>
        {services.map((service, index) => (
          <ServiceCard key={index} onClick={() => handleExpandClick(index)}>
            <CardMedia
              component="img"
              height={expanded[index] ? '480' : '240'}
              image={service.imageUrl}
              alt={service.alt}
              style={{
                width: '420px', // Adjust width as needed
                transition: 'height 0.3s ease-in-out',
              }}
            />
            <CardContentFlex>
              <Subheading>{service.title}</Subheading>
              <Collapse in={expanded[index]}>
                <Typography variant="h5" color="">
                  {service.description}
                </Typography>
              </Collapse>
            </CardContentFlex>
          </ServiceCard>
        ))}
      </PageContainer>
    </>
  );
}
export default Services;