import styled from 'styled-components';

export const SplitLayout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SplitLayoutLeft = styled.div`
  height: 100vh;
  overflow-y: scroll;
  min-width: ${(p) => (p.only ? '350px' : '100%')};
  max-width: ${(p) => (p.only ? '350px' : '100%')};
  padding: 20px;
`;

export const SplitLayoutRight = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
`;
