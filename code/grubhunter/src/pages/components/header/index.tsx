import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <section className="layout-grid">
        <Logo />
      </section>
    </header>
  );
}
