import React from 'react';
import styled from 'styled-components';

   const ContactContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 500px;
   margin: 20px auto;
   padding: 20px;
   border: 1px solid #ccc;
   border-radius: 8px;
   background-color: #fff;
 `;

 const ContactInfo = styled.div`
   margin-bottom: 20px;
   text-align: center;
 `;

 const ContactTitle = styled.h2`
   margin-bottom: 10px;
 `;

  const ContactDetail = styled.p`
   margin: 5px 0;
   font-size: 1.2em;
 `;

function Contact() {
  return (
    <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>
        <ContactDetail>Phone: +64224142956</ContactDetail>
        <ContactDetail>Email: admin@qsofte.com </ContactDetail>
        <ContactDetail>Address: 1 Te Hoiere Street , Aotea , Porirua  </ContactDetail>
      </ContactInfo> 
    </ContactContainer>
  );
}

export default Contact;
