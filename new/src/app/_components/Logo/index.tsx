import Link from "next/link";
import SkolzLogo from "../../../../public/logo.svg";
import styles from "./styles.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <SkolzLogo width={270}/>
    </Link>
  );
} 
