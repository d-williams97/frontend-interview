import { useState, useEffect } from "react";
import "./App.css";
import Applications from "./Applications";
import Header from "./Header";
import { Button } from "./ui/Button/Button";
import { Pagination } from "./ui/Pagination/Pagination";

export type LoanType = "Flexi-Loan" | "Business Loan" | "Cash Advance" | "RLS" | "CBILS";

export interface LoanHistory {
  loan_started: string;
  loan_ended: string;
  principle: number;
  interest_rate: number;
  interest: number;
}

export interface Application {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  loan_amount: number;
  loan_type: LoanType;
  date_created: string;
  expiry_date: string;
  avatar: string;
  loan_history: LoanHistory[];
}


function App() {
  const [applicationsData, setApplicationsData] = useState<Application[]>([]);
  const [apiPage, setApiPage] = useState(1); // Track API fetch page
  const [currentDisplayPage, setCurrentDisplayPage] = useState(1); // Track display page
  const [loading, setLoading] = useState(false);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(applicationsData.length / ITEMS_PER_PAGE);

  // Get current page items
  const startIndex = (currentDisplayPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = applicationsData.slice(startIndex, endIndex);

  const fetchApplications = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3001/api/applications?_page=${pageNum}&_limit=5`
      );

      if (!res.ok) {
        throw new Error(`There was an error fetching the applications: ${res.status}`);
      }
      const data = await res.json() as Application[];

      setApplicationsData((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = apiPage + 1;
    setApiPage(nextPage);
    fetchApplications(nextPage);
  };

  const handlePageChange = (page: number) => {
    setCurrentDisplayPage(page);
  };

  return (
    <div className="App">
      <Header />
      <Applications applicationsData={currentPageData} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentDisplayPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <div className="loadMoreContainer">
        {applicationsData.length > 0 && (
          <Button className="" onClick={handleLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load more"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
