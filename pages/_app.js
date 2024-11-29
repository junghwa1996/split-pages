import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/globals.css';
import Head from 'next/head';
import { Noto_Sans_KR } from '@next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>watchit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider>
        <div className={notoSansKR.className}>
          <Header />
          <Container page>
            <Component {...pageProps} />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}
