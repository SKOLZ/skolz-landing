import { ReactNode } from "react";
import styles from './styles.module.scss';

type HighlightProps = {
  id: number,
  current: number,
  children: ReactNode
};

export default function Highlight ({ id, current, children }: HighlightProps) {
  return (
    <span className={`text ${styles.highlight} ${id === current ? styles.active : ''}`}>{children}</span>
  );
}
