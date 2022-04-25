import { colors } from 'config';
import styled from 'styled-components';
import { color, border, space } from 'styled-system';

const Button = styled.button`
  ${color}
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

export default Button;
