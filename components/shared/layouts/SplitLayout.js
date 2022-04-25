import styled from 'styled-components';

function SplitLayout({ children }) {
  return <SplitLayoutContainer>{children}</SplitLayoutContainer>;
}

const SplitLayoutContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const SplitLayoutLeft = styled.div`
  height: 100vh;
  overflow-y: scroll;
  min-width: 350px;
  max-width: 350px;
  padding: 16px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SplitLayoutRight = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
