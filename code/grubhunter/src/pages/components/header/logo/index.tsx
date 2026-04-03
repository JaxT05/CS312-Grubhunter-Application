import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="assets/logo.svg"
        width={600}
        height={600}
        className={styles.root}
        alt="grubhunter logo"
      />
    </Link>
  );
}
