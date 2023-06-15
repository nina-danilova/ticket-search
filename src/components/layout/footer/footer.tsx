import React from 'react';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>Разработано Mau_nsk. 2023 год</p>
    </footer>
  );
};
