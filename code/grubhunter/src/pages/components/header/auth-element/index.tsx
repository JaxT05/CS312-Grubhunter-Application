import { signIn, signOut } from "next-auth/react";
import styles from "./index.module.css";
import { useSession } from "next-auth/react";
import React from "react";
import Button from "../../button";
import Link from "next/link";

const AuthElement = (): React.JSX.Element => {
  const { data: session, status } = useSession();
  return (
    <nav className={styles.navContainer}>
      {status === "authenticated" ? (
        <>
          <span className={styles.greeting}>Hello, {session.user?.name}</span>
          <Button variant="outline">
            <Link href={`/list/${session.user?.fdlst_private_userId}`}>
              View Wishlist
            </Link>
          </Button>
          <Button variant="blue" clickHandler={() => signOut()}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button variant="blue" clickHandler={() => signIn()}>
          Sign In
        </Button>
      )}
    </nav>
  );
};
export default AuthElement;
