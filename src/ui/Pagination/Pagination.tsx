import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        <button
          className={styles.arrowButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        
        <span className={styles.pageInfo}>
          Page: {currentPage} Of {totalPages}
        </span>
        
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className={styles.recordInfo}>
        Showing records {(currentPage - 1) * 5 + 1} - {Math.min(currentPage * 5, totalPages * 5)} of {totalPages * 5}
      </div>
    </div>
  );
};
