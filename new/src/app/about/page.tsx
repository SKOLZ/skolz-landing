import cn from "classnames";

import { Logo } from "../_components/Logo";
import { Footer } from "../_components/Footer";

import styles from "./styles.module.scss";
import { CareerTimeline } from "./_components/CareerTimeline";

const AboutPage = () => {
  return (
    <>
      <main className={cn("main", styles.aboutContainer)}>
        <Logo className={styles.logo} />
        <section className={cn(styles.section, styles.career)}>
          <h2 className={cn("title-2", styles.sectionTitle)}>Career</h2>
          <CareerTimeline />
        </section>
        <section className={cn(styles.section, styles.sideProjects)}>
          <h2 className={cn("title-2", styles.sectionTitle)}>Side Projects</h2>
          <div className={styles.sideProjectsList}></div>
        </section>
        <section className={cn(styles.section, styles.moreAboutMe)}>
          <h2 className={cn("title-2", styles.sectionTitle)}>
            Want to know more about me?
          </h2>
        </section>
      </main>
      <Footer className={styles.footer} />
    </>
  );
};

export default AboutPage;
