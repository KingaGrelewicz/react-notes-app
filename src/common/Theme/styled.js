import styled from "styled-components";
import { MdLightMode } from "react-icons/md";

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 20px;
  cursor: pointer;
`;

export const ThemeIcon = styled(MdLightMode)`
  color: ${({ theme }) => theme.color.iconsColor};
`;
