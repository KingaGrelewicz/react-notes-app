import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { mediaQuery } from "../../../theme";

export const SearchContainer = styled.div`
  max-width: 1450px;
  background: ${({ theme }) => theme.color.barColor};
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  box-shadow: 3px 3px 10px 0px rgba(146, 148, 158, 0.5);

  @media (max-width: ${mediaQuery.breakpoints.tabletVertical}px) {
    margin: 20px 20px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 10px 8px;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.primaryTextColor};
  &::placeholder {
    color: ${({ theme }) => theme.color.primaryTextColor};
  }
`;

export const SearchIcon = styled(IoMdSearch)`
  color: ${({ theme }) => theme.color.iconsColor};
`;
