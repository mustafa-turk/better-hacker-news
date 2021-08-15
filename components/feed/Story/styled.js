import { LinkIcon } from 'components/shared/Icon';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.gray[100]};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  &:hover {
    background: ${(p) => p.theme.colors.gray[50]};
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-top: 4px;
  font-family: Inter;
`;

export const Details = styled.div`
  color: #686868;
  margin-top: 5px;
  span {
    margin-right: 10px;
  }
  margin-top: 20px;
`;

export const DomainIcon = styled(LinkIcon)`
  margin-right: 5px;
  color: ${(p) => p.theme.colors.gray[200]};
`;

export const Domain = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.gray[200]};
  margin-top: 5px;
  font-family: 'Roboto Mono', monospace;
`;

export const CommentsCount = styled.span`
  color: #c6c6c6;
`;
