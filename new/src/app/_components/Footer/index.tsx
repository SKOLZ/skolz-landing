import cn from "classnames";

import LinkedinIcon from "../../../../public/linkedin_logo.svg";
import GithubIcon from "../../../../public/github_logo.svg";
import TwitterIcon from "../../../../public/twitter_logo.svg";
import { socials } from "@/app/constants";

import styles from "./styles.module.scss";

interface FooterProps {
  className?: string;
}
export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <a
        className={styles.socialLink}
        href={socials.linkedin}
        rel="noreferrer noopener"
        target="_blank"
        style={{ "--stagger": "0.7s" } as React.CSSProperties}
      >
        <LinkedinIcon className={styles.socialIcon} />
      </a>
      <a
        className={styles.socialLink}
        href={socials.github}
        rel="noreferrer noopener"
        target="_blank"
        style={{ "--stagger": "0.8s" } as React.CSSProperties}
      >
        <GithubIcon className={styles.socialIcon} />
      </a>
      <a
        className={styles.socialLink}
        href={socials.twitter}
        rel="noreferrer noopener"
        target="_blank"
        style={{ "--stagger": "0.9s" } as React.CSSProperties}
      >
        <TwitterIcon className={styles.socialIcon} />
      </a>
    </footer>
  );
};
