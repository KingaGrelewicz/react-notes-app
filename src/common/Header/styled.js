import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    margin: 20px 12px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.color.primaryTextColor};

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 32px;
  }
`;
