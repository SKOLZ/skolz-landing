import { useLayoutEffect, useRef, MutableRefObject } from 'react';

import styles from './styles.module.scss';

export default function CustomCursor () {
  const cursorRef = useRef() as MutableRefObject<HTMLInputElement>;
  const cursorInnerRef = useRef() as MutableRefObject<HTMLInputElement>;
  const cursorOuterRef = useRef() as MutableRefObject<HTMLInputElement>;

  useLayoutEffect(() => {
    // const cursor = document.querySelector('.js-cursor');
    // const cursorInner = document.querySelector('.js-cursor-move-inner') as HTMLElement;
    // const cursorOuter = document.querySelector('.js-cursor-move-outer') as HTMLElement;

    // const triggers = document.querySelectorAll('button, a, Link');

    let mouseX = 0;
    let mouseY = 0;

    let innerX = 0;
    let innerY = 0;

    let outerX = 0;
    let outerY = 0;

    let loop: (number | null) = null;

    const lerp = (s: number, e: number, t: number) => ((1 - t) * s) + (t * e);

    const render = () => {
      loop = null;

      innerX = lerp(innerX, mouseX, 0.15); // eslint-disable-line no-magic-numbers
      innerY = lerp(innerY, mouseY, 0.15); // eslint-disable-line no-magic-numbers

      outerX = lerp(outerX, mouseX, 0.13); // eslint-disable-line no-magic-numbers
      outerY = lerp(outerY, mouseY, 0.13); // eslint-disable-line no-magic-numbers

      const angle = Math.atan2(mouseY - outerY, mouseX - outerX) * 180 / Math.PI; // eslint-disable-line no-magic-numbers

      const normalX = Math.min(Math.floor(Math.abs(mouseX - outerX) / outerX * 1000) / 1000, 1); // eslint-disable-line no-magic-numbers
      const normalY = Math.min(Math.floor(Math.abs(mouseY - outerY) / outerY * 1000) / 1000, 1); // eslint-disable-line no-magic-numbers
      const normal = normalX + (normalY * 0.5); // eslint-disable-line no-magic-numbers
      const skwish = normal * 0.7; // eslint-disable-line no-magic-numbers

      cursorInnerRef.current.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
      cursorOuterRef.current.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 +
        skwish}, ${1 - skwish})`;
      if (normal !== 0) {
        loop = window.requestAnimationFrame(render);
      }
    };

    window.requestAnimationFrame(render);

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!loop) {
        loop = window.requestAnimationFrame(render);
      }
    });

    // triggers.forEach(trigger => {
    //   trigger.addEventListener('mouseenter', () => {
    //     cursor!.classList.add('cursor--hover');
    //   });

    //   trigger.addEventListener('mouseleave', () => {
    //     cursor!.classList.remove('cursor--hover');
    //   });
    // });
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <div className={`${styles.cursorMoveInner} js-cursor-move-inner`}>
        <div className={styles.cursorInner} />
      </div>
      <div className={`${styles.cursorMoveOuter} js-cursor-move-outer`}>
        <div className={styles.cursorOuter} />
      </div>
    </div>
  );
}
