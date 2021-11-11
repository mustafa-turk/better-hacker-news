import { LinkIcon } from 'components/shared/Icon';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  margin: 30px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray[100]};
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-top: 4px;
`;

export const Details = styled.div`
  color: #686868;
  margin-top: 10px;
  span {
    margin-right: 10px;
  }
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
`;

export const CommentsCount = styled.span`
  color: #c6c6c6;
`;
