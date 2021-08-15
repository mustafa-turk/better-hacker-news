import styled from 'styled-components';
import theme from 'styles/theme';

export const Nav = styled.div`
  display: flex;
  padding: 20px 0 10px;
`;

export const NavItem = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${(p) => (p.isActive ? theme.colors.accent : theme.colors.gray[200])};
  background: ${(p) => (p.isActive ? theme.colors.accent : 'none')};
  border-radius: 16px;
  padding: 5px 15px;
  cursor: pointer;
  color: ${(p) => (p.isActive ? 'white' : theme.colors.gray[200])};
  &:hover {
    background: ${(p) => (p.isActive ? theme.colors.accentDarker : theme.colors.gray[100])};
  }
  svg {
    margin-right: 5px;
  }
`;
