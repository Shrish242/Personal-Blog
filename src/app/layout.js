import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { ThemeContextProvider } from '../context/Themecontext.jsx';
import Themeprovider from '../provider/Themeprovider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shrish site',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
      <link rel="manifest" href="../../public/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body className={inter.className}>
        <ThemeContextProvider>
          <Themeprovider>
            <div className='container'>
              <div className='wrapper'>
                <Navbar />
                {children}
                <Footer/>
              </div>
            </div>
          </Themeprovider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
