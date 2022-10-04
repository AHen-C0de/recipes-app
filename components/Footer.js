import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Some link...</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: beige;
  height: 4rem;
`;
