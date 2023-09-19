import NavBar from './components/NavBar/NavBar';
import './imageGallery.css';

export const metadata = {
  title: 'Image Gallery',
  description: 'Image gallery project',
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
