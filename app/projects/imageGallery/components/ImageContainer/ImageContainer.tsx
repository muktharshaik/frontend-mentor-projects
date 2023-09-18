import Image from 'next/image';
import type { Photo } from '../../../../models/ImageSchema';
import styles from './ImageContainer.module.scss';

/* eslint-disable-next-line */
export interface ImageContainerProps {
  image: Photo;
}

export function ImageContainer({ image }: ImageContainerProps) {
  return (
    <div className={styles['image-container']}>
      <Image
        src={image.src.large}
        fill={true}
        alt={image.alt}
        sizes="250px"
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        blurDataURL={image.blurredDataUrl}
      />
    </div>
  );
}

export default ImageContainer;
