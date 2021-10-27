import styled from 'styled-components';

export const Container = styled.div`
  border-left: 2px solid ${(p) => p.theme.colors.accent};
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
  color: ${(p) => p.theme.colors.gray[200]};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  p {
    margin-bottom: 20px !important;
  }
  a:link {
    padding: 0 2px;
    border-radius: 1px;
    background: ${(p) => p.theme.colors.gray[100]};
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  background: ${(p) => p.theme.colors.gray[100]};
  color: ${(p) => p.theme.colors.gray[200]};
  cursor: pointer;
  font-size: 14px;
`;
