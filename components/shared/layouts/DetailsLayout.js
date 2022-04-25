import styled from 'styled-components';

export default function DetailsLayout({ children }) {
  return <DetailsLayoutContainer>{children}</DetailsLayoutContainer>;
}

const DetailsLayoutContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 15px;
`;
