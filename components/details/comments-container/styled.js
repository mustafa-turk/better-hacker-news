import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 17px;
  color: #fafafa;
  display: flex;
  align-items: center;
  font-weight: 500;
  svg {
    margin-right: 5px;
  }
`;

export const LoadingComments = styled.div`
  color: ${(p) => p.theme.colors.gray[200]};
`;

export const LoadingText = styled.p`
  padding-top: 10px;
`;

export const NoComment = styled.p`
  color: ${(p) => p.theme.colors.gray[200]};
`;

export const Container = styled.div`
  border-left: 2px solid ${(p) => (p.isNested ? p.theme.colors.gray[100] : p.theme.colors.accent)};
  padding-left: 20px;
  margin-right: 10px;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  margin-top: ${(p) => (p.isNested ? '20px' : '0')};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NestedContainer = styled.div`
  border-left: 2px solid #212328;
  padding-left: 20px;
  margin-right: 10px;
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
  p:last-child {
    margin-bottom: 0px !important;
  }
  a:link {
    padding: 0 2px;
    border-radius: 1px;
    background: ${(p) => p.theme.colors.gray[100]};
  }
  color: #fafafa;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  background: ${(p) => p.theme.colors.gray[100]};
  color: ${(p) => p.theme.colors.gray[200]};
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
`;
