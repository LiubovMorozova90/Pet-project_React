import React from 'react';
import style from './NewButton.module.css';

type Props = {
  children: string;
  color: string;
  onClick: Function;
}


const NewButton = (props: Props) => { 
  return (
    <button
      className={style['new-btn']}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default NewButton;