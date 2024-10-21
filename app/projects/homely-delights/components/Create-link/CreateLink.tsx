'use client';

import { useRouter } from 'next/navigation';
import styles from './Createlink.module.scss';
import { useState } from 'react';

export interface CreateLinkProps {}

export async function CreateLink({}: CreateLinkProps) {
  const router = useRouter();
  const [amount, setAmount] = useState<string>("0");
  const [showError, setShowError] = useState<boolean>(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;

    // check there are no alphabets in the input
    if (isNaN(Number(amount))) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      setAmount(amount);
      return;
    }
  }
  return (
    <div className={styles['container']}>
      <input className={styles['input']} type='text' placeholder='Enter amount' onChange={handleInputChange} />
      <button
        className={styles['btn']}
      >Submit</button>
      {showError && <p className={styles['error']}>Please enter a valid amount</p>}
    </div>
  );
}

export default CreateLink;
