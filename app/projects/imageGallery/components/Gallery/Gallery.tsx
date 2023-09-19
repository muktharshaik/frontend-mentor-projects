import styles from './Gallery.module.scss';
import type { ImagesResults } from '../../../../models/ImageSchema';
import fetchImagesData from '../../../../lib/fetchImageData';
import blurredImageData from 'app/lib/placeHolderForImages';
import env from '../../../../lib/env';
import ImageContainer from '../ImageContainer/ImageContainer';

/* eslint-disable-next-line */
export interface GalleryProps {
  topic?: string | undefined;
}

export async function Gallery({ topic }: GalleryProps) {
  const url: string = !topic
    ? `${env.PEXELS_API_URL}/curated`
    : `${env.PEXELS_API_URL}/search?query=${topic}`;
  const imagesData: ImagesResults | undefined = await fetchImagesData(url);

  if (!imagesData) {
    return <h1>No Images are found!</h1>;
  }

  const photosWithBlur = await blurredImageData(imagesData);

  return (
    <div className={styles['container']}>
      {photosWithBlur.map((image) => {
        return <ImageContainer key={image.id} image={image} />;
      })}
    </div>
  );
}

export default Gallery;
