import styled from "styled-components";

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.color.barColor};
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
`;
