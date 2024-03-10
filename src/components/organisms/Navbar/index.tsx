import { IoCartOutline } from "react-icons/io5";
import { NavbarProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function Navbar({ }: NavbarProps) {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <Image
            src="/tangent-logo.jpeg"
            alt="tangent logo"
            height="4rem"
          />
        </Link>

        <Button shape="rounded" prefix={<IoCartOutline fontSize="2rem" />} />
      </div>
    </nav>
  );
}
