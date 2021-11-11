import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  padding: 20px 0 0px;
`;

export const NavItem = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : 'none')};
  border-radius: 16px;
  padding: 5px 15px;
  cursor: pointer;
  color: ${(p) => (p.isActive ? 'white' : p.theme.colors.gray[200])};
  &:hover {
    background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : p.theme.colors.gray[100])};
  }
  svg {
    margin-right: 5px;
  }
`;
