import '../styles/globals.css'
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Heatwave Blog',
  description: 'A blog showcasing our research on heatwaves.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
