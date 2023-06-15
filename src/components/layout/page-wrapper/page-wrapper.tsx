import React from 'react';

import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';

import styles from './page-wrapper.module.scss';

export const PageWrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
