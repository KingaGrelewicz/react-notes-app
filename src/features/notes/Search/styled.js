import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.color.barColor};
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  box-shadow: 3px 3px 10px 0px rgba(146, 148, 158, 0.5);
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
