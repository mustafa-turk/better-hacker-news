import styled from 'styled-components';

export const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray[100]};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Source = styled.a`
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 10px;
  display: flex;
  svg {
    margin-right: 5px;
  }
`;

export const MetaData = styled.div`
  color: ${(p) => p.theme.colors.gray[200]};
`;
