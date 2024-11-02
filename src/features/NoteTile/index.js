import styled, { css } from "styled-components";

export const NoteTile = styled.section`
  min-height: 250px;
  width: 350px;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 0px rgba(146, 148, 158, 1);

  ${({ $variant }) =>
    $variant === "note" &&
    css`
      background-color: ${({ theme }) => theme.color.primaryBackground};
    `}

  ${({ $variant }) =>
    $variant === "addNote" &&
    css`
      background-color: ${({ theme }) => theme.color.addNoteBackground};
    `}
`;
