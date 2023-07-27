import React, { PropsWithChildren } from 'react';

import styles from './Field.module.css'

interface Props extends PropsWithChildren {
  label?: 'Имя пользователя: ' | 'Пароль: ';
  errorMessage?: string;
  isErrorVisible?: boolean;
}

const Field = (props: Props) => {
  return (
    <div>
      <label className={styles['label-form']}>{props.label}</label>
      {props.children}
      {props.isErrorVisible && (
        <div style={{ color: 'red' }}>{props.errorMessage}</div>
      )}
    </div>
  );
};

export default Field;
