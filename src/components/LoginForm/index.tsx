import React from 'react';
import { useFormik } from 'formik';

import Field from 'components/Field';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: 'Введите ваше имя',
      password: 'Введите пароль',
    },
    onSubmit: (values) => {
      console.log('submit', values);
    },

    
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Field label="Имя пользователя"></Field>
    </form>
  );
};
