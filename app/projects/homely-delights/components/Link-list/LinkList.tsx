'use client';

import { useRouter } from 'next/navigation';
import styles from './Linklist.module.scss';

export interface LinkListProps {}

export async function LinkList({}: LinkListProps) {
  const router = useRouter();
  return (
    <div className={styles['container']}>
      <h1>Hello from List of Links</h1>
    </div>
  );
}

export default LinkList;
