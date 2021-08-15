import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  border-left: 2px solid ${theme.colors.accent};
  padding-left: 20px;
  margin-right: 10px;
  font-family: 'Roboto Mono', monospace;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NestedContainer = styled.div`
  border-left: 2px solid #212328;
  padding-left: 20px;
  margin-right: 10px;
  font-family: 'Roboto Mono', monospace;
  overflow-wrap: break-word;
  width: 100%;
  margin-top: 20px;
`;

export const Author = styled.div`
  color: ${theme.colors.gray[200]};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  p {
    margin-bottom: 20px !important;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  background: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[200]};
  cursor: pointer;
  font-size: 14px;
`