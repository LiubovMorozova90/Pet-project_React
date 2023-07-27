import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  label?: 'Имя пользователя' | 'Пароль';
  errorMessage?: string;
  isErrorVisible?: boolean;
}

const Field = (props: Props) => {
  return (
    <div>
      <label>{props.label}</label>
      {props.children}
      {props.isErrorVisible && (
        <div style={{ color: 'red' }}>{props.errorMessage}</div>
      )}
    </div>
  );
};

export default Field;
