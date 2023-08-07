import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Вы уверены, что хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Reader</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <button className={styles.write}>Написать рецензию</button>
                </Link>
                <button onClick={onClickLogout} className={styles.logout}>
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className={styles.login}>Войти</button>
                </Link>
                <Link to="/register">
                  <button className={styles.create}>Создать аккаунт</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
