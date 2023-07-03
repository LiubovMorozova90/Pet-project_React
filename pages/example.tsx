import Head from 'next/head';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Привет!</title>
      </Head>
      <main className={styles.main}>
        <p>Пример страницы</p>
      </main>
    </>
  );
}
