import { darken } from "polished";
import styled from "styled-components";
import { mediaQuery } from "../../../theme";

export const AddNoteTitle = styled.input`
  font-size: 22px;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  resize: none;
  background-color: ${({ theme }) => theme.color.addNoteBackground};
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin: 10px 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.primaryTextColor};
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const AddNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddNoteText = styled.textarea`
  font-size: 20px;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  resize: none;
  background-color: ${({ theme }) => theme.color.addNoteBackground};
  color: ${({ theme }) => theme.color.primaryTextColor};

  &::placeholder {
    color: ${({ theme }) => theme.color.primaryTextColor};
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const AddNoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddNoteRemaining = styled.small`
  word-wrap: break-word;
`;

export const AddNoteButton = styled.button`
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: ${({ theme }) => theme.color.buttonText};
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
