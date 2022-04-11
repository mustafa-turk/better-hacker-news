import styled from 'styled-components';

export const Header = styled.div``;

export const Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const Item = styled.button`
  background: ${(p) => (p.isActive ? p.theme.colors.gray[100] : p.theme.colors.gray[50])};
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 15px;
  border-radius: 30px;
  cursor: pointer;
`;
