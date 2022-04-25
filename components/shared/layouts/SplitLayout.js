import styled from 'styled-components';

function SplitLayout({ children }) {
  return <SplitLayoutContainer>{children}</SplitLayoutContainer>;
}

export const SplitLayoutContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const SplitLayoutLeft = styled.div`
  height: 100vh;
  overflow-y: scroll;
  min-width: ${(p) => (p.only ? '350px' : '100%')};
  max-width: ${(p) => (p.only ? '350px' : '100%')};
  padding: 16px;
`;

const SplitLayoutRight = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
`;

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
