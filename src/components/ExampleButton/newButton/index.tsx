import React from 'react';
import PropTypes from 'prop-types';
import style from './newButton.module.css';

const Button = ({ 
    children, 
    color, 
    onClick 
}) => {
  return (
    <button
      className={style['new-btn']}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;