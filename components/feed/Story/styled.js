import styled from "styled-components";
import theme from "styles/theme";
import { BiLink } from "react-icons/bi";

export const Container = styled.div`
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  border: 1px solid ${theme.colors.gray[100]};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  &:hover {
    background: ${theme.colors.gray[50]};
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
`

export const LinkIcon = styled(BiLink)`
  margin-right: 5px;
  color: ${theme.colors.gray[200]};
`

export const Domain = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.gray[200]};
  margin-top: 5px;
`

export const CommentsCount = styled.span`
  color: #C6C6C6;
`