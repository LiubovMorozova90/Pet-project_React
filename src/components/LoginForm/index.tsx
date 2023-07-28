import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Field from 'components/Field';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('submit', values);
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required('Пожалуйста, введите ваше имя'),
      password: Yup.string().required('Пожалуйста, введите ваш пароль'),
    }),
  });

  return (
    <form className={styles['main-form']} onSubmit={formik.handleSubmit}>
      <Field
        label="Имя пользователя: "
        isErrorVisible={!!(formik.touched.username && formik.errors.username)}
        errorMessage={formik.errors.username}
      >
        <input
          type="text"
          name="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </Field>
      <Field
        // className={'main-form__field'}
        label="Пароль: "
        isErrorVisible={!!(formik.touched.password && formik.errors.password)}
        errorMessage={formik.errors.password}
      >
        <input
          type="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Field>

      <button className={styles['sumbit-btn']} type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
