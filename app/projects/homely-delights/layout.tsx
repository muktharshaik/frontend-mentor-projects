import NavBar from './components/NavBar/NavBar';
import './homelyDelights.css';

export const metadata = {
  title: 'Homely Delights',
  description: 'Homely delights payments and transactions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
