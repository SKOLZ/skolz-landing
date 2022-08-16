import { useLayoutEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

import WoloxLogo from 'assets/wolox_logo.svg';
import LinkedinIcon from 'assets/linkedin_icon.svg';
import GithubIcon from 'assets/github_icon.svg';
import TwitterIcon from 'assets/twitter_icon.svg';

import ProfileImage from './components/profileImage';
import styles from './styles.module.scss';

type HomeProps = {
  logoRef: RefObject<HTMLAnchorElement>
};

export default function Home({ logoRef }: HomeProps) {
  const borderRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialLinkedinRef = useRef(null);
  const socialGithubRef = useRef(null);
  const socialTwitterRef = useRef(null);

  useLayoutEffect(() => {
    // eslint-disable-line no-magic-numbers
    const infoTimeline = gsap.timeline();
    infoTimeline.fromTo([borderRef.current, logoRef.current], { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 5 });
    infoTimeline.fromTo(firstNameRef.current, { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 3 }, 0.5); // eslint-disable-line no-magic-numbers
    infoTimeline.fromTo(lastNameRef.current, { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 5 }, 0.8); // eslint-disable-line no-magic-numbers
    infoTimeline.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 3 }, 1.2); // eslint-disable-line no-magic-numbers
    infoTimeline.fromTo(
      socialLinkedinRef.current,
      { opacity: 0 },
      { opacity: 1, ease: 'power4.out', duration: 3 },
      1.4 // eslint-disable-line no-magic-numbers
    );
    infoTimeline.fromTo(
      socialGithubRef.current,
      { opacity: 0 },
      { opacity: 1, ease: 'power4.out', duration: 3 },
      1.6 // eslint-disable-line no-magic-numbers
    );
    infoTimeline.fromTo(
      socialTwitterRef.current,
      { opacity: 0 },
      { opacity: 1, ease: 'power4.out', duration: 3 },
      1.8 // eslint-disable-line no-magic-numbers
    );

    const profileImageTimeline = gsap.timeline();
    const maskSquares = document.getElementsByClassName('mask-square');
    let delay = 0.5; // eslint-disable-line no-magic-numbers
    for (const maskSquare of maskSquares) {
      profileImageTimeline.fromTo(
        maskSquare,
        { fill: '#000' },
        { fill: '#FFF', ease: 'power4.out', duration: 8 },
        delay
      );
      delay += 0.1; // eslint-disable-line no-magic-numbers
    }
  }, []);

  return (
    <>
      <div className={styles.border} ref={borderRef} />
      <div className={styles.introInfo}>
        <h1 className={`${styles.firstName} title m-top-auto`} ref={firstNameRef}>Gabriel</h1>
        <h1 className={`${styles.lastName} title regular uppercase big m-bottom-10`} ref={lastNameRef}>Zanzotti</h1>
        <p className={`${styles.description} m-bottom-auto`} ref={descriptionRef}>
          Software Engineer graduated from ITBA specialized in Front-End development. Currently making Front-End & Mobile developers grow technically and professionally at
          <a className={styles.inlineLink} href="https://www.wolox.com.ar" rel="noreferrer noopener" target="_blank">
            <WoloxLogo className={styles.descriptionImageText} />
          </a>
          part of Accenture.
        </p>
        <div className={`${styles.social} m-top-4`}>
          <a className={`${styles.socialLink} m-right-4`} ref={socialLinkedinRef} href="https://www.linkedin.com/in/skolz/" rel="noreferrer noopener" target="_blank">
            <LinkedinIcon className={styles.socialIcon}/>
          </a>
          <a className={`${styles.socialLink} m-right-4`} ref={socialGithubRef} href="https://github.com/SKOLZ" rel="noreferrer noopener" target="_blank">
            <GithubIcon className={styles.socialIcon}/>
          </a>
          <a className={`${styles.socialLink} m-right-4`} ref={socialTwitterRef} href="https://twitter.com/WSKOLZ" rel="noreferrer noopener" target="_blank">
            <TwitterIcon className={styles.socialIcon}/>
          </a>
        </div>
      </div>
      <ProfileImage className={styles.profileImage} />
    </>
  );
}
