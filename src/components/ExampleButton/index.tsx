import React, { PropsWithChildren } from 'react';

import styles from './ExampleButton.module.css';

// Чтобы руками не указывать тип для children наследуемся от PropsWithChildren
// но это не обязательно, можно было и руками добавить поле - children?: React.ReactNode
interface Props extends PropsWithChildren {
  textColor: 'tomato' | 'plum';
  emoji?: string;
}

const ExampleButton = (props: Props) => {
  return (
    <button
      className={styles['example-btn']}
      style={{ color: props.textColor }}
    >
      {props.children}

      {props.emoji && (
        <div className={styles['example-btn__emoji']}>{props.emoji}</div>
      )}
    </button>
  );
};

export default ExampleButton;
