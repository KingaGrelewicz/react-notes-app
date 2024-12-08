import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.color.primaryTextColor};
`;
