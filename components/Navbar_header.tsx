import React from "react";
import Link from "next/link";
import styles from "../public/Navbar_header.module.css";

export const Navbar_header = () => {
  return (
    <Link href="/">
      <a className={styles.linkTitle}>
        <h1 className={styles.titleMenu}>Menu Alexander</h1>
      </a>
    </Link>
  );
};
