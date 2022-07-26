import styled from 'styled-components';

function SplitLayout({ children }) {
  return <SplitLayoutContainer>{children}</SplitLayoutContainer>;
}

function SplitLayoutLeft({ children, hidden }) {
  return <Left hidden={hidden}>{children}</Left>;
}

function SplitLayoutRight({ children, hidden }) {
  return <Right hidden={hidden}>{children}</Right>;
}

const SplitLayoutContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const Left = styled.div`
  height: 100vh;
  overflow-y: scroll;
  min-width: 350px;
  max-width: 350px;
  padding: 16px;
  display: ${(p) => (p.hidden ? 'none' : 'block')};
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Right = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
  display: ${(p) => (p.hidden ? 'none' : 'block')};
`;

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
