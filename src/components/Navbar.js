import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/qsofte-high-resolution-logo-color-on-transparent-background.png'; // Make sure the path is correct
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styled components for the navbar
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const NavbarInnerContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: ${({ theme }) => theme.spacing.xLarge};
`;

const NavLinksContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.spacing.small};
  font-weight: Semi Bold;
  &.active {
    // text-decoration: underline;
    border: 1px solid ${({ theme }) => theme.colors.accent}; // Add this line
  }
`;

const MobileNavLinks = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.xsmall};
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacing.small};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  z-index: 10;

  ${StyledNavLink} {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

// Navbar component
const Navbar = ({ theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavLink to="/">
          <Logo src={logo} alt="Qsofte logo" />
        </NavLink>
        <NavLinksContainer>
          <StyledNavLink to="/" exact activeClassName="active">
            Home
          </StyledNavLink>
          <StyledNavLink to="/services" activeClassName="active">
            Services
          </StyledNavLink>
          <StyledNavLink to="/contact" activeClassName="active">
            Contact
          </StyledNavLink>
        </NavLinksContainer>
        <MobileMenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuIcon>
      </NavbarInnerContainer>

      {isMobileMenuOpen && (
        <MobileNavLinks>
          <StyledNavLink
            to="/"
            exact
            activeClassName="active"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/services"
            activeClassName="active"
            onClick={() => setIsMobileMenuOpen(false)}
          >
          
            Services
          </StyledNavLink>
          <StyledNavLink
            to="/contact"
            activeClassName="active"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </StyledNavLink>
        </MobileNavLinks>
      )}
    </NavbarContainer>
  );
};

export default withTheme(Navbar);
