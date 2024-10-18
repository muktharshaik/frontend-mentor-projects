'use client';

import { useRouter } from 'next/navigation';
import styles from './Home.module.scss';

export interface HomeProps {}

export async function Home({}: HomeProps) {
  const router = useRouter();
  return (
    <div className={styles['container']}>
      <button 
        className={styles["btn"]}
        onClick={() => {
          router.push('projects/homely-delights/transactions');
        }}
      >Transactions</button>
      <button 
        className={styles["btn"]}
        onClick={() => {
          router.push('projects/homely-delights/links');
        }}
      >Create Link</button>
    </div>
  );
}

export default Home;
