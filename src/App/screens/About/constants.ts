import styles from './styles.module.scss';
import highschool1 from 'assets/highschool/highschool_1.png';
import highschool2 from 'assets/highschool/highschool_2.png';
import highschool3 from 'assets/highschool/highschool_3.png';
import university1 from 'assets/university/university_1.png';
import university2 from 'assets/university/university_2.png';
import university3 from 'assets/university/university_3.png';
import wolox1 from 'assets/wolox/wolox_1.png';
import wolox2 from 'assets/wolox/wolox_2.png';
import wolox3 from 'assets/wolox/wolox_3.png';
import wolox4 from 'assets/wolox/wolox_4.png';

export const highlights = [
  {
    id: 0,
    containerClass: styles.highschoolContainer,
    images: [
      {
        src: highschool1,
        classes: `${styles.slideLeft} ${styles.highschool1}`
      },
      {
        src: highschool2,
        classes: `${styles.slideTop} ${styles.highschool2}`
      },
      {
        src: highschool3,
        classes: `${styles.slideRight} ${styles.highschool3}`
      }
    ]
  },
  {
    id: 1,
    containerClass: styles.universityContainer,
    images: [
      {
        src: university1,
        classes: `${styles.slideTop} ${styles.university1}`
      },
      {
        src: university2,
        classes: `${styles.slideBottom} ${styles.university2}`
      },
      {
        src: university3,
        classes: `${styles.slideLeft} ${styles.university3}`
      }
    ]
  },
  {
    id: 2,
    containerClass: styles.woloxContainer,
    images: [
      {
        src: wolox1,
        classes: `${styles.slideRight} ${styles.wolox1}`
      },
      {
        src: wolox2,
        classes: `${styles.slideLeft} ${styles.wolox2}`
      },
      {
        src: wolox3,
        classes: `${styles.slideBottom} ${styles.wolox3}`
      },
      {
        src: wolox4,
        classes: `${styles.slideTop} ${styles.wolox4}`
      }
    ]
  }
]; 
