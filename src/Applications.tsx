import React from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Application } from "./types";

const Applications: React.FC<{ applicationsData: Application[] }> = ({ applicationsData }) => {
  const applicationsWithIds = applicationsData.map((application, index) => ({
    ...application,
    id: index + 1,
  }));
  return (
    <div className={styles.Applications}>
      {applicationsWithIds.map((application) => (
        <SingleApplication key={application.id} application={application} />
      ))}
    </div>
  );
};

export default Applications;
