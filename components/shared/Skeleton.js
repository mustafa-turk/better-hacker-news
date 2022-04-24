import styled from 'styled-components';
import ReactLoadingSkeleton from 'react-loading-skeleton';

function Skeleton(props) {
  return <SkeletonContainer {...props} />;
}

const SkeletonContainer = styled(ReactLoadingSkeleton)`
  background-color: red;
`;

export default Skeleton;
