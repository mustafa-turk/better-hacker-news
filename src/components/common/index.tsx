import { colors } from 'theme';
import styled from 'styled-components';
import { color, border, space, display } from 'styled-system';

export const Box = styled.div`
  ${color}
  ${border}
  ${space}
  ${display}
`;

export const Button = styled.button`
  ${border}
  ${space}
  padding: 5px 10px;
  border-radius: 12px;
  background: ${colors.gray[900]};
  border: 1px solid ${colors.gray[800]};
  color: ${colors.gray[300]};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    background: ${colors.gray[800]};
  }
`;

export const Heading = styled.h1`
  ${space}
  font-weight: 400;
  font-size: 28px;
  opacity: 0.8;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  height: 48px;
  background: black;
  display: flex;
  align-items: center;
  z-index: 10;
  margin-bottom: 30px;
`;

export const Text = ({ children }) => <span>{children}</span>;
