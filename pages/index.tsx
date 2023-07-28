import React, { useState } from 'react';

import Head from 'next/head';

import styles from 'styles/Home.module.css';
import ExampleButton from 'components/ExampleButton';
import NewButton from 'components/NewButton';
import NewInput from 'components/newInput';

const handleClick = () => {
  console.log('Кнопка была нажата');
};

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Head>
        <title>Лол или кек?</title>
      </Head>
      <main className={styles['main']}>
        <h1>Пример страницы</h1>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
        </p>
        <ExampleButton textColor="tomato" emoji="🔥">
          Кнопка
        </ExampleButton>

        <NewButton onClick={(e) => {}} color="Yellow">
          Нажми меня
        </NewButton>

        <NewInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </main>
    </>
  );
}
