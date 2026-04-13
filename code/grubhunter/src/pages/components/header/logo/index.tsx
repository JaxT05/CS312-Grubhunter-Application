import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../public/assets/logo.svg";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={600}
        height={600}
        className={styles.root}
        alt="grubhunter logo"
      />
    </Link>
  );
}
