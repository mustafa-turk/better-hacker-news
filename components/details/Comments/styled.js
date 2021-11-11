import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 17px;
`;

export const LoadingComments = styled.div`
  color: ${(p) => p.theme.colors.gray[200]};
`;

export const LoadingText = styled.p`
  padding-top: 10px;
`;

export const NoComment = styled.p`
  color: ${(p) => p.theme.colors.gray[200]};
  text-align: center;
`;
