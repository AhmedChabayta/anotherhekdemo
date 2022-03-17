import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <Logo href=''>
        <img style={{ width: "20vw" }} src={logo} alt='' />
      </Logo>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <MenuLink href=''>Home</MenuLink>
        <MenuLink href=''>Projects</MenuLink>
        <MenuLink href=''>Services</MenuLink>
        <MenuLink href=''>About</MenuLink>
      </Menu>
    </Nav>
  );
}
const Nav = styled.div`
flex-wrap: wrap;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
const Burger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  display: none;

  span {
    height: 2px;
    width: 25px;
    background-color: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;

  &:hover {
    color: green;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
const Logo = styled.div`
  width: 10vw;
  padding: 2rem 0;
`;

export default Navbar;
