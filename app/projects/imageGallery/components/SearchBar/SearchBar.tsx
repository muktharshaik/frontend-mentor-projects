'use client';

import { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useRouter } from 'next/navigation';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export function SearchBar(props: SearchBarProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`projects/imageGallery/results/${search}`);
    setSearch('');
  };

  return (
    <div className={styles['searchContainer']}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
