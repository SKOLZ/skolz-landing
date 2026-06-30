import cn from "classnames";
import { career } from "@/app/constants";

import styles from "./styles.module.scss";
import { CSSProperties } from "react";

export const CareerTimeline = () => {
  return (
    <div className={styles.timelineWrapper}>
      <ul
        className={styles.timeline}
        style={{ "--highlight-years": career.length } as CSSProperties}
      >
        {career.map((job, index) => (
          <li
            className={styles.timelineItem}
            key={index}
            highlight-year={job.highlightYear}
          >
            <h3 className={cn("title-4 primary")}>{job.company}</h3>
            <p className={cn("text-4")}>{job.period}</p>
            <div className={styles.jobDetailsContainer}>
              <p className={cn("text-3 primary")}>{job.position}</p>
              <p className={cn("text-2", styles.jobDescription)}>
                {job.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
