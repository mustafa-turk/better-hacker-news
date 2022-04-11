import styled from 'styled-components';

export const Navbar = styled.div``;

export const NavbarItem = styled.button`
  background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : p.theme.colors.gray[50])};
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 30px;
  &:hover {
    background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : p.theme.colors.gray[100])};
    cursor: pointer;
  }
`;
