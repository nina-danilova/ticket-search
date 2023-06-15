import React from 'react';

import { SegmentsType } from '../../../types/entities';

import { calculateDestinateTime, getEnding } from './utilities';
import styles from './transfer-info.module.scss';

type TransferInfoProps = {
  segments: SegmentsType;
};

export const TransferInfo: React.FC<TransferInfoProps> = ({ segments }) => {
  return (
    <div className={styles['transfer-info']}>
      {segments.map((segment) => (
        <table
          className={styles['transfer-info__flight']}
          key={segment.id}
        >
          <thead>
            <tr className={styles['transfer-info__heading']}>
              <th>
                {segment.origin} - {segment.destination}
              </th>
              <th>В пути</th>
              <th>
                {segment.stops.length} пересад
                {getEnding(segment.stops.length)}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles['transfer-info__description']}>
              <td>{calculateDestinateTime(segment.date, segment.duration)}</td>
              <td>
                {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
              </td>
              <td>{segment.stops.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};
