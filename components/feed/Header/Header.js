import * as Styled from './styled';

function Header({ children }) {
  return <Styled.Header>{children}</Styled.Header>;
}

function Item({ children, isActive, onClick }) {
  return (
    <Styled.Item isActive={isActive} onClick={onClick}>
      {children}
    </Styled.Item>
  );
}

Header.Item = Item;

export default Header;
