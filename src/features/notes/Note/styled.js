import styled from "styled-components";
import { mediaQuery } from "../../../theme";

export const NoteTitle = styled.h2`
  margin: 10px 0;
  font-size: 22px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NoteParagraph = styled.p`
  padding: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 20px;
  margin: 10px 0;
  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const NoteCreationDate = styled.small``;

export const NoteButton = styled.button`
  background: transparent;
  border: black;
  cursor: pointer;
  color: ${({ theme }) => theme.color.iconsColor};
`;

export const NoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
