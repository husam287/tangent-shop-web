import { IoCartOutline } from "react-icons/io5";
import { NavbarProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import Text from "@/components/atoms/Text";
import NavList from "@/components/molecules/NavList";
import { NavItem, NavListProps } from "@/components/molecules/NavList/types";

export default function Navbar({ }: NavbarProps) {
  const navlist: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    }
  ]

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/tangent-logo.jpeg"
            alt="tangent logo"
            height="4rem"
          />

          <Text text="TANGENT" color="primary" fontSize="2x" fontWeight="bold" variant="span" />
        </Link>


        <div className={styles.rightContainer}>
          <NavList list={navlist} />

          <Button shape="rounded" prefix={<IoCartOutline fontSize="2rem" />} />
        </div>
      </div>
    </nav>
  );
}
