import Head from 'next/head';
import dayjs from 'dayjs';
import zhCN from 'dayjs/locale/zh-cn';

import GlobalHeader from '../components/GlobalHeader';

import styles from './_app.module.scss';
import '../styles/styles.scss';
import '../components/MDXCompoents/mdx-component.scss';

dayjs.locale(zhCN);

const App = ({ Component, pageProps }) => {
  return (
    <section className={styles.wrap}>
      <Head>
        <title>yuding 的笔记</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <GlobalHeader />
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
      </div>
    </section>
  )
};

export default App;
