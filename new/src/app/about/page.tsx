import { ViewTransition } from "react";

import { Logo } from "../_components/Logo";

import styles from "./styles.module.scss";

interface Props {}

const AboutPage: React.FC<Props> = () => {
  return (
    <main className="main">
      <Logo className={styles.logo} />
      <section className={styles.holis}></section>
    </main>
  );
};

export default AboutPage;
