import * as Styled from './styled';

function SplitLayout({ children }) {
  return <Styled.SplitLayout>{children}</Styled.SplitLayout>;
}

SplitLayout.Left = Styled.SplitLayoutLeft;
SplitLayout.Right = Styled.SplitLayoutRight;

export default SplitLayout;
