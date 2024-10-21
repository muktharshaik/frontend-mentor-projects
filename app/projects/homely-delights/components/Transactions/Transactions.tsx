import Image from 'next/image';
import type { Photo } from '../../../../models/ImageSchema';
import styles from './Transactions.module.scss';

/* eslint-disable-next-line */
export interface TransactionsProps {}

export function Transactions({}: TransactionsProps) {
  return (
    <div className={styles['image-container']}>
      <h1>Hello from transactions</h1>
    </div>
  );
}

export default Transactions;
