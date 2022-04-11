import styled from 'styled-components';
import { LinkIcon } from 'components/shared/Icon';

export const List = styled.div`
  text-align: center;
`;

export const LoadButton = styled.button`
  background: ${(p) => p.theme.colors.accent};
  border: none;
  color: white;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 30px;
  &:hover {
    background: ${(p) => p.theme.colors.accentDarker};
    cursor: pointer;
  }
`;

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

export const ListItem = styled.div`
  text-align: left;
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
