import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <Image className={styles.root} src={logo} alt="grubhunter logo" />
    </Link>
  );
}
