import styled from 'styled-components';
import { colors } from 'theme';

export default function Header() {
  return (
    <Container>
      <img src="logo.svg" width="48px" alt="Hacker News logo" />
      <div>
        <h1>Hacker News</h1>
        <span>A better Hacker News reading experience</span>
      </div>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  gap: 20px;
  margin: 5px;
  padding-bottom: 30px;

  h1 {
    font-size: 23px;
  }

  span {
    color: ${colors.gray[400]};
  }
`;
