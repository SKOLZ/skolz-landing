import NextLink from "next/link";
import cn from "classnames";

import HygraphLogo from "../../../public/hygraph_logo.svg";
import LinkedinIcon from "../../../public/linkedin_icon_rhombus.svg";
import GithubIcon from "../../../public/github_icon_rhombus.svg";
import TwitterIcon from "../../../public/twitter_icon_rhombus.svg";

import { Logo } from "../_components/Logo";
import { ProfileImage } from "./_components/ProfileImage";

import styles from "./styles.module.scss";

const Homepage = () => {
  return (
    <main className="main">
      <Logo className={styles.logo} />
      <section className={styles.homepageContainer}>
        <div className={styles.content}>
          <ProfileImage className={styles.profileImage} />
          <div className={styles.introInfo}>
            <h1 className="contents">
              <span className={cn("title-3", styles.firstName)}>Gabriel</span>
              <span
                className={cn("title-1 primary uppercase", styles.lastName)}
              >
                Zanzotti
              </span>
            </h1>
            <p className={cn("text-1", styles.description)}>
              Software Engineer graduated from ITBA specialized in Front-End
              development. Building high quality interfaces to improve content
              management experiences at{" "}
              <NextLink
                className={styles.inlineLink}
                href="https://www.hygraph.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <HygraphLogo className={styles.hygraphDescriptionLogo} />
              </NextLink>
              .
            </p>
            <div className={styles.social}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/skolz/"
                rel="noreferrer noopener"
                target="_blank"
                style={{ "--stagger": "0.7s" } as React.CSSProperties}
              >
                <LinkedinIcon className={styles.socialIcon} />
              </a>
              <a
                className={styles.socialLink}
                href="https://github.com/SKOLZ"
                rel="noreferrer noopener"
                target="_blank"
                style={{ "--stagger": "0.8s" } as React.CSSProperties}
              >
                <GithubIcon className={styles.socialIcon} />
              </a>
              <a
                className={styles.socialLink}
                href="https://twitter.com/SKOLZZ"
                rel="noreferrer noopener"
                target="_blank"
                style={{ "--stagger": "0.9s" } as React.CSSProperties}
              >
                <TwitterIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
