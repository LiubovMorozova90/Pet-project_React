import React from 'react';
import style from './NewInput.module.css';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NewInput = (props: Props) => { 
  return (
    <input className={style['new-input']} type="text" value={props.value} onChange={props.onChange} />
  );
};

export default NewInput;