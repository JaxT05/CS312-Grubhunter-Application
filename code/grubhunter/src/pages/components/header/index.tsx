import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Logo from "./logo";
import AuthElement from "./auth-element";
import Button from "../button";

export default function Header() {
  return (
    <header>
      <section className={`layout-grid ${styles.root}`}>
        <Logo />
        <AuthElement />
      </section>
    </header>
  );
}
