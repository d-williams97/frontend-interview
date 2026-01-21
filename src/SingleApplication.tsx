import React from "react";
import styles from "./SingleApplication.module.css";
import { Application } from "./App";

interface SingleApplicationProps {
  application: Application;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const formatCurrency = (amount: number): string => {
  return `£${amount.toLocaleString()}`;
};


const SingleApplication: React.FC<SingleApplicationProps> = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan amount</sub>
        {formatCurrency(application.loan_amount)}
      </div>
      <div className={styles.cell}>
        <sub>Application date</sub>
        {formatDate(application.date_created)}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formatDate(application.expiry_date)}
      </div>
    </div>
  );
};

export default SingleApplication;
