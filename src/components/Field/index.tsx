import React, { PropsWithChildren } from 'react';
import cs from 'classnames';

import styles from './Field.module.css';

type Props = JSX.IntrinsicElements['div'] & {
  label?: string;
  errorMessage?: string;
  isErrorVisible?: boolean;
};

const Field = ({
  label,
  errorMessage,
  isErrorVisible,
  className,
  children,
  ...otherProps
}: Props) => {
  return (
    <div className={cs(styles['field'], className)} {...otherProps}>
      <label className={styles['field__label']}>{label}</label>
      {children}
      {isErrorVisible && (
        <div className={styles['field__error']}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Field;
