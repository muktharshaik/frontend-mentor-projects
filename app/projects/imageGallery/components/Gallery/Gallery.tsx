import styles from './Gallery.module.scss';
import type { ImagesResults } from '../../../../models/ImageSchema';
import fetchImagesData from '../../../../lib/fetchImageData';
import env from '../../../../lib/env';

/* eslint-disable-next-line */
export interface GalleryProps {}

export async function Gallery(props: GalleryProps) {
  const imagesData: ImagesResults | undefined = await fetchImagesData(
    `${env.PEXELS_API_URL}/curated`
  );

  if (!imagesData) {
    return <h1>No Images are found!</h1>;
  }

  return (
    <div className={styles['container']}>
      {imagesData.photos.map((image) => {
        return (
          <div key={image.id} className={styles['image-container']}>
            <p>{image.src.large}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
