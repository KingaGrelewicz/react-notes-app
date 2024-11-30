import styled from "styled-components";

export const NoteTitle = styled.h2`
  margin: 10px 0;
  font-size: 24px;
`;

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NoteParagraph = styled.p`
  padding: 10px 0;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const NoteCreationDate = styled.small``;

export const NoteButton = styled.button`
  background: transparent;
  border: black;
  cursor: pointer;
`;

export const NoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
