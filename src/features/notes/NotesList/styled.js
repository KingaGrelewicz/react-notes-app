import styled, { keyframes } from "styled-components";

export const NotesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

export const LoadingWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  background: ${({ theme }) => theme.color.primaryBackground};
  border: 5px solid ${({ theme }) => theme.color.barColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const LoadingText = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.img`
  animation: ${rotate360} 5s linear infinite;
  display: flex;
  margin: 0 auto;
  height: auto;
`;

export const ErrorWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  background: ${({ theme }) => theme.color.primaryBackground};
  border: 5px solid ${({ theme }) => theme.color.barColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
