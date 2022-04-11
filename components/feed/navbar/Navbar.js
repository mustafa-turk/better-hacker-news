import * as Styled from './styled';

function Navbar({ children }) {
  return <Styled.Navbar>{children}</Styled.Navbar>;
}

function NavbarItem({ children, isActive, onClick }) {
  return (
    <Styled.NavbarItem isActive={isActive} onClick={onClick}>
      {children}
    </Styled.NavbarItem>
  );
}

Navbar.Item = NavbarItem;

export default Navbar;
