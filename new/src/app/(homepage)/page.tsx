import NextLink from "next/link";

import HygraphLogo from "../../../public/hygraph_logo.svg";
import LinkedinIcon from "../../../public/linkedin_icon.svg";
import GithubIcon from "../../../public/github_icon.svg";
import TwitterIcon from "../../../public/twitter_icon.svg";

import { ProfileImage } from "./_components/ProfileImage";

import styles from "./styles.module.scss";

export default function Homepage() {
  return (
    <section className={styles.homepageContainer}>
      <div className={styles.pageBorder} />
      <div className={styles.content}>
        <ProfileImage className={styles.profileImage} />
        <div className={styles.introInfo}>
          <h1 className={styles.firstName}>Gabriel</h1>
          <h1 className={styles.lastName}>Zanzotti</h1>
          <p className={styles.description}>
            Software Engineer graduated from ITBA specialized in Front-End
            development. Building high quality interfaces to improve content
            creators&apos; experiences at{" "}
            <NextLink
              className={styles.inlineLink}
              href="https://www.hygraph.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <HygraphLogo className={styles.descriptionImageText} />
            </NextLink>
            .
          </p>
          <div className={styles.social}>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/skolz/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <LinkedinIcon className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialLink}
              href="https://github.com/SKOLZ"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GithubIcon className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialLink}
              href="https://twitter.com/SKOLZZ"
              rel="noreferrer noopener"
              target="_blank"
            >
              <TwitterIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
