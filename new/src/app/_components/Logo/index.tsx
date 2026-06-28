import cn from "classnames";
import Link from "next/link";

import SkolzLogo from "../../../../public/logo.svg";

import styles from "./styles.module.scss";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn(styles.logo, className)}>
      <SkolzLogo width={270} />
    </Link>
  );
};
