import styled from "styled-components";
import { MdLightMode } from "react-icons/md";
import { mediaQuery } from "../../theme";

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 0 16px;
  }
`;

export const ThemeIcon = styled(MdLightMode)`
  color: ${({ theme }) => theme.color.iconsColor};
  width: 32px;
  height: 32px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 24px;
    height: 24px;
  }
`;
