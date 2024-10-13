import { darken } from "polished";
import styled from "styled-components";

export const AddNoteTitle = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  resize: none;
  background-color: ${({ theme }) => theme.color.addNoteBackground};
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin: 10px 0;
`;

export const AddNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddNoteText = styled.textarea`
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  resize: none;
  background-color: ${({ theme }) => theme.color.addNoteBackground};
  color: ${({ theme }) => theme.color.primaryTextColor};
`;

export const AddNoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddNoteRemaining = styled.small``;

export const AddNoteButton = styled.button`
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: ${({ theme }) => theme.color.primaryTextColor};
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.color.buttonColor)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.2, theme.color.buttonColor)};
  }
`;
