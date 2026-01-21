import { render, screen } from '@testing-library/react';
import Applications from './Applications';
import { Application } from './App';

// Mock data - 5 fake applications for testing
const mockApplications: Application[] = [
    {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        company: "Acme Corp",
        loan_amount: 50000,
        loan_type: "Business Loan",
        date_created: "2021-01-15T00:00:00.000Z",
        expiry_date: "2022-01-15T00:00:00.000Z",
        avatar: "https://example.com/avatar.jpg",
        loan_history: [
            {
                loan_started: "2019-03-10T00:00:00.000Z",
                loan_ended: "2019-09-15T00:00:00.000Z",
                principle: 25000,
                interest_rate: 0.05,
                interest: 1250
            },
            {
                loan_started: "2020-01-20T00:00:00.000Z",
                loan_ended: "2020-07-30T00:00:00.000Z",
                principle: 30000,
                interest_rate: 0.045,
                interest: 1350
            }
        ]
    },
    {
        id: 2,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        company: "Tech Solutions",
        loan_amount: 75000,
        loan_type: "Flexi-Loan",
        date_created: "2021-02-20T00:00:00.000Z",
        expiry_date: "2022-02-20T00:00:00.000Z",
        avatar: "https://example.com/avatar2.jpg",
        loan_history: [
            {
                loan_started: "2018-06-01T00:00:00.000Z",
                loan_ended: "2019-01-15T00:00:00.000Z",
                principle: 40000,
                interest_rate: 0.06,
                interest: 2400
            }
        ]
    },
    {
        id: 3,
        first_name: "Bob",
        last_name: "Johnson",
        email: "bob.johnson@example.com",
        company: "Global Industries",
        loan_amount: 100000,
        loan_type: "CBILS",
        date_created: "2021-03-10T00:00:00.000Z",
        expiry_date: "2022-03-10T00:00:00.000Z",
        avatar: "https://example.com/avatar3.jpg",
        loan_history: [
            {
                loan_started: "2017-04-12T00:00:00.000Z",
                loan_ended: "2017-12-20T00:00:00.000Z",
                principle: 50000,
                interest_rate: 0.055,
                interest: 2750
            },
            {
                loan_started: "2019-08-05T00:00:00.000Z",
                loan_ended: "2020-03-15T00:00:00.000Z",
                principle: 75000,
                interest_rate: 0.048,
                interest: 3600
            },
            {
                loan_started: "2020-11-01T00:00:00.000Z",
                loan_ended: "2021-05-30T00:00:00.000Z",
                principle: 80000,
                interest_rate: 0.042,
                interest: 3360
            }
        ]
    },
    {
        id: 4,
        first_name: "Alice",
        last_name: "Williams",
        email: "alice.williams@example.com",
        company: "Start-up Inc",
        loan_amount: 30000,
        loan_type: "Cash Advance",
        date_created: "2021-04-05T00:00:00.000Z",
        expiry_date: "2022-04-05T00:00:00.000Z",
        avatar: "https://example.com/avatar4.jpg",
        loan_history: [] // New customer with no previous loan history
    },
    {
        id: 5,
        first_name: "Charlie",
        last_name: "Brown",
        email: "charlie.brown@example.com",
        company: "Brown Enterprises",
        loan_amount: 60000,
        loan_type: "RLS",
        date_created: "2021-05-12T00:00:00.000Z",
        expiry_date: "2022-05-12T00:00:00.000Z",
        avatar: "https://example.com/avatar5.jpg",
        loan_history: [
            {
                loan_started: "2020-02-10T00:00:00.000Z",
                loan_ended: "2020-08-25T00:00:00.000Z",
                principle: 45000,
                interest_rate: 0.05,
                interest: 2250
            },
            {
                loan_started: "2020-10-15T00:00:00.000Z",
                loan_ended: "2021-04-20T00:00:00.000Z",
                principle: 55000,
                interest_rate: 0.047,
                interest: 2585
            }
        ]
    }
];

describe('Applications Component', () => {
    test('renders 5 application  and ist relevant data in the associated columns', () => {
        // Render the component with our mock data
        render(<Applications applicationsData={mockApplications} />);

        // Get all the company names (one per application)
        const companyElements = screen.getAllByText(/Corp|Solutions|Industries|Inc|Enterprises/);

        // Check that we have 5 items
        expect(companyElements.length).toBe(5);
    });

    test('displays company names for each application', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that each company name is visible
        expect(screen.getByText('Acme Corp')).toBeInTheDocument();
        expect(screen.getByText('Tech Solutions')).toBeInTheDocument();
        expect(screen.getByText('Global Industries')).toBeInTheDocument();
        expect(screen.getByText('Start-up Inc')).toBeInTheDocument();
        expect(screen.getByText('Brown Enterprises')).toBeInTheDocument();
    });

    test('displays email addresses for each application', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that emails are visible
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
        expect(screen.getByText('bob.johnson@example.com')).toBeInTheDocument();
        expect(screen.getByText('alice.williams@example.com')).toBeInTheDocument();
        expect(screen.getByText('charlie.brown@example.com')).toBeInTheDocument();
    });

    test('displays loan amounts with currency formatting', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that loan amounts are formatted correctly with £ symbol
        expect(screen.getByText('£50,000')).toBeInTheDocument();
        expect(screen.getByText('£75,000')).toBeInTheDocument();
        expect(screen.getByText('£100,000')).toBeInTheDocument();
        expect(screen.getByText('£30,000')).toBeInTheDocument();
        expect(screen.getByText('£60,000')).toBeInTheDocument();
    });

    test('displays formatted dates for application date and expiry date', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that dates are formatted as DD-MM-YYYY
        expect(screen.getByText('15-01-2021')).toBeInTheDocument(); // John's application date
        expect(screen.getByText('15-01-2022')).toBeInTheDocument(); // John's expiry date
        expect(screen.getByText('20-02-2021')).toBeInTheDocument(); // Jane's application date
        expect(screen.getByText('20-02-2022')).toBeInTheDocument(); // Jane's expiry date
    });

    test('displays all required column headers', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that all column labels are present
        // Note: getAllByText returns multiple matches (one per application row)
        const companyLabels = screen.getAllByText('Company');
        const nameLabels = screen.getAllByText('Name');
        const emailLabels = screen.getAllByText('Email');
        const loanAmountLabels = screen.getAllByText('Loan amount');
        const applicationDateLabels = screen.getAllByText('Application date');
        const expiryDateLabels = screen.getAllByText('Expiry date');

        // Each label should appear 5 times (once per application)
        expect(companyLabels.length).toBe(5);
        expect(nameLabels.length).toBe(5);
        expect(emailLabels.length).toBe(5);
        expect(loanAmountLabels.length).toBe(5);
        expect(applicationDateLabels.length).toBe(5);
        expect(expiryDateLabels.length).toBe(5);
    });

    test('displays full names (first name + last name)', () => {
        render(<Applications applicationsData={mockApplications} />);

        // Check that full names are displayed
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
        expect(screen.getByText('Alice Williams')).toBeInTheDocument();
        expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    });
});
