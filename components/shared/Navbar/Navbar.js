import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Styled from './styled';
import { ClockIcon, HotIcon } from '../Icon';

export default function Navigation() {
  const router = useRouter();

  return (
    <Styled.Nav>
      <Link href="/">
        <Styled.NavItem isActive={router.pathname === '/'}>
          <HotIcon />
          Top
        </Styled.NavItem>
      </Link>
      <Link href="/new">
        <Styled.NavItem isActive={router.pathname === '/new'}>
          <ClockIcon />
          New
        </Styled.NavItem>
      </Link>
    </Styled.Nav>
  );
}
