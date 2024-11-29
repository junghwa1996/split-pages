import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>watchit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider>
        <Header />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
