import { Oval } from 'react-loader-spinner';
import theme from 'styles/theme';

export default function LoadingIndicator() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={20}
      width={20}
      strokeWidth={5}
      color={theme.colors.gray[400]}
      secondaryColor={theme.colors.gray[500]}
    />
  );
}
