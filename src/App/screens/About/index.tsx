
import { useEffect, useState } from 'react';
import Highlight from './components/Highlight';
import styles from './styles.module.scss';
import { highlights } from './constants';

export default function About() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const MAX_HIGHLIGHT_ID = highlights.length - 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHighlight(currentHighlight => currentHighlight < MAX_HIGHLIGHT_ID ? currentHighlight + 1 : 0);
    }, 20000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={styles.border} />
      <div className={`${styles.contentWrapper} row item-1`}>
        <div className="column item-1 m-right-10">
          <h1 className="title big">About</h1>
          {
            highlights.map(highlight => {
              return (
                <div className={`${styles.highlightImages} ${currentHighlight === highlight.id ? styles.active : styles.inactive}`}>
                  {
                    highlight.images.map(image => {
                      return (
                        <div className={`${styles.imageWrapper} ${image.classes}`}>
                          <img src={image.src} alt="" className={styles.highlightImage} />
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
        <p className="text item-1 self-middle">
          Born in April 1992, I've always been quite a reserved person who loves art, technology and videogames.
  Regarding my academic career I studied during primary & secondary school at <Highlight id={0} current={currentHighlight}>St' Edwards College</Highlight> where I graduated as a Bachelor in economics in 2009 and after that I studied Software Engineering at <Highlight id={1} current={currentHighlight}>ITBA</Highlight> where I graduated in 2016.
  I started working at <Highlight id={2} current={currentHighlight}>Wolox</Highlight> in 2013 as a trainee Back-End developer.
  I soon changed to Android and Front-End development in 2014 and since I always loved aesthetic designs at that point I started creating Wolox's Front-End guidelines and helping my teammates with Front-End related questions.
  During 2015 I became a Front-End Tech Lead at Wolox with a lot to learn a bunch of energy and initiatives.
  After being 4 years in that role I decided to lean to a more management related position as Head of Front-End development.
  At that point I coordinated not only technical standards but also recruiting and training projections, ASIGNACIONES of my team and participated in Wolox's Engineering OKRs such as the definition of the carrer path model for every developer and a project metrics system to have more information about the projects being delivered.
        </p>
      </div>
    </>
  );
}
