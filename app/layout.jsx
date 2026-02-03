import './globals.css';

export const metadata = {
    title: 'EV Analytics Dashboard | MapUp Assessment',
    description: 'Comprehensive analytics dashboard for Washington State electric vehicle population data',
    keywords: 'electric vehicles, EV, analytics, dashboard, data visualization, Washington State',
    authors: [{ name: 'MapUp Candidate' }],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
