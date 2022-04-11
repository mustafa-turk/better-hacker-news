import * as Styled from './styled';

function Navbar({ children }) {
  return <Styled.Header>{children}</Styled.Header>;
}

function NavbarItem({ children, isActive, onClick }) {
  return (
    <Styled.Item isActive={isActive} onClick={onClick}>
      {children}
    </Styled.Item>
  );
}

Navbar.Item = NavbarItem;

export default Navbar;
