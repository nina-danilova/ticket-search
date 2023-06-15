import React from 'react';

import { logoAviasales } from '../../../assets';
import { linkToMain } from '../../../constants';

import styles from './logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <a
      className={styles['logo-link']}
      href={linkToMain}
    >
      <img
        className={styles['logo-link__image']}
        src={logoAviasales}
        width="80"
        height="80"
        alt="Aviasales logo"
      />
    </a>
  );
};
