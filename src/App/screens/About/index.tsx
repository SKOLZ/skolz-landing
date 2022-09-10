import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import Highlight from './components/Highlight';
import styles from './styles.module.scss';
import { highlights } from './constants';

type AboutProps = {
  logoRef: RefObject<HTMLAnchorElement>;
};

export default function About({ logoRef }: AboutProps) {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const borderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const aboutContentRef = useRef(null);

  useLayoutEffect(() => {
    const aboutTimeline = gsap.timeline();
    aboutTimeline.fromTo([borderRef.current, logoRef.current], { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 10 });
    aboutTimeline.fromTo([titleRef.current, aboutContentRef.current], { opacity: 0 }, { opacity: 1, ease: 'power4.out', duration: 5 }, 1); // eslint-disable-line no-magic-numbers
  }, [logoRef, aboutContentRef, borderRef, titleRef]);

  useEffect(() => {
    const MAX_HIGHLIGHT_ID = highlights.length - 1;
    const IMAGE_TRANSITION_DELAY = 20000;

    const intervalId = setInterval(() => {
      setCurrentHighlight(highlight => highlight < MAX_HIGHLIGHT_ID ? highlight + 1 : 0);
    }, IMAGE_TRANSITION_DELAY);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={styles.border} ref={borderRef} />
      <div className={`${styles.contentWrapper} row item-1`}>
        <div className={`${styles.imagesColumn} column m-right-10`}>
          <h1 className="title big m-bottom-4" ref={titleRef}>About</h1>
          {
            highlights.map(highlight => (
              <div key={highlight.id} className={`${styles.highlightImages} ${highlight.containerClass} ${currentHighlight === highlight.id ? styles.active : styles.inactive}`}>
                {
                  highlight.images.map(image => (
                    <div key={image.src} className={`${styles.imageWrapper} ${image.classes}`}>
                      <img src={image.src} alt="" className={styles.highlightImage} />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div ref={aboutContentRef} className={`${styles.aboutText} item-1 self-middle`}>
          <p className="text m-bottom-5">
            Born in April 1992, I&apos;ve always been quite a reserved person who loves art, technology and videogames.
            Regarding my academic career I studied during elementary & highschool at <Highlight id={0} current={currentHighlight}>St&apos; Edwards College</Highlight> where I graduated in 2009 and after that I studied Software Engineering at <Highlight id={1} current={currentHighlight}>ITBA</Highlight> where I graduated in 2016.
            I started working at <Highlight id={2} current={currentHighlight}>Wolox</Highlight> in 2013 as a trainee Web & Mobile developer and that&apos;s when the real journey started.
          </p>
          <p className="text m-bottom-5">
            I worked in very different projects during the first few years, from social networks and e-commerces to IOT integration apps.
            I learnt a lot and as I acquired more experience I began to participate in the definition of technical standards, trainings, courses and interviews.
            In 2015 I started a new role as Wolox&apos;s first Front-End Tech Lead where apart from leading bigger projects defined the tools and frameworks we used,
            set objectives and dictated the course of the Front-End department.
          </p>
          <p className="text m-bottom-5">
            After being 4 years in that role I transitioned to a management position as Head of Front-End & Mobile development.
            At that point I coordinated not only technical standards but also recruiting and training projections, I distributed talent between projects acording to developer insterests and project needs and also participated in Wolox&apos;s Engineering OKRs. These global objectives generated impact in the whole organization and we worked on topics such as the definition of the carrer path for every developer and a project metrics system to have more information about the projects being delivered.
          </p>
          <p className="text m-bottom-5">
            At the begining of 2021 Accenture acquired Wolox and our main focus became the integration to Accenture&apos;s systems which lasted 6 months. After the integration although my tasks stayed mostly the same I had more direct participation with projects and with culture related initiatives.
          </p>
        </div>
      </div>
    </>
  );
}
