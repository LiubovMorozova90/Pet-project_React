import Head from 'next/head';

import ExampleButton from 'components/ExampleButton';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Лол или кек?</title>
      </Head>
      <main className={styles.main}>
        <p>Пример страницы</p>

        <ExampleButton textColor="tomato">Кнопка</ExampleButton>
      </main>
    </>
  );
}
