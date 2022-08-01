import { Oval } from 'react-loader-spinner';
import { colors } from 'config';

export default function LoadingIndicator() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={20}
      width={20}
      strokeWidth={5}
      color={colors.gray[400]}
      secondaryColor={colors.gray[500]}
    />
  );
}
