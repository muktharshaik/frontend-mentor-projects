'use client';
import Image from 'next/image';
import type { Photo } from '../../../../models/ImageSchema';
import CreateLink from '../Create-link/CreateLink';
import styles from './Links.module.scss';

/* eslint-disable-next-line */
export interface LinksProps {}

export function Links({}: LinksProps) {
  return (
    <div className={styles['image-container']}>
      <h1>Hello from Links</h1>
      {/* CREATE LINKS */}
      <CreateLink />
      {/* LIST PREVIOUS LINKS */}
    </div>
  );
}

export default Links;
