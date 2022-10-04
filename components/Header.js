import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Headline>A Headline!</Headline>
      <NavItem>nav item 1</NavItem>
      <NavItem>nav item 2</NavItem>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: beige;
`;

const Headline = styled.h1`
  color: red;
`;

const NavItem = styled.div`
  color: black;
`;
