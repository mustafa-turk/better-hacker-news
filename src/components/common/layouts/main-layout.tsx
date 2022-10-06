import styled from 'styled-components';

export default function MainLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 15px;
`;
