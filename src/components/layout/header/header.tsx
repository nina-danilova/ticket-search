import React from 'react';

import { Logo } from '../../ui/logo';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles['visually-hidden']}>Билеты по заданному маршруту</h1>
      <Logo />
    </header>
  );
};
