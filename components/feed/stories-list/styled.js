import styled from 'styled-components';
import { LinkIcon } from 'components/shared/Icon';

export const Loading = styled.div`
  text-align: center;
`;

export const LoadButton = styled.button``;

export const Comment = styled.div`
  cursor: pointer;
  margin: 20px 0;
  background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : 'none')};
  border-radius: 5px;
  padding: 8px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
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
