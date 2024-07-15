import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
})

export const metadata = {
  title: "Driverave",
  description: "Аренда жилья и автомобилей от владельцев",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id='modal-root'></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
