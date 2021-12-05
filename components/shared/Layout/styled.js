import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const DetailsLayout = styled.div`
  max-width: 720px;
  padding: 20px;
  margin: 0 auto;
`;

export const SplitLayout = {
  Wrapper: styled.div`
    display: flex;
  `,
  Left: styled.div`
    height: 100vh;
    overflow-y: scroll;
    min-width: ${(p) => (p.showPartialView ? '350px' : '100%')};
    max-width: ${(p) => (p.showPartialView ? '350px' : '100%')};
    padding: 20px;
  `,
  Right: styled.div`
    height: 100vh;
    overflow-y: scroll;
    padding: 20px;
  `,
};
