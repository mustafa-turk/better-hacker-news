import Link from 'next/link';
import { GoFlame } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { useRouter } from 'next/router';
import * as Styled from "./styled";

export default function Navigation() {
  const router = useRouter();

  return (
    <Styled.Nav>
      <Link href="/">
        <Styled.NavItem isActive={router.pathname === "/"}>
          <GoFlame />
          Top
        </Styled.NavItem>
      </Link>
      <Link href="/new">
        <Styled.NavItem isActive={router.pathname === "/new"}>
          <FaRegClock />
          New
        </Styled.NavItem>
      </Link>
    </Styled.Nav>
  )
}

