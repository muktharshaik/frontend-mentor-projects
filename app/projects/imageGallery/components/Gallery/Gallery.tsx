import styles from './Gallery.module.scss';
import type { ImagesResults } from '../../../../models/ImageSchema';
import fetchImagesData from '../../../../lib/fetchImageData';
import blurredImageData from 'app/lib/placeHolderForImages';
import env from '../../../../lib/env';
import ImageContainer from '../ImageContainer/ImageContainer';

/* eslint-disable-next-line */
export interface GalleryProps {}

export async function Gallery(props: GalleryProps) {
  const imagesData: ImagesResults | undefined = await fetchImagesData(
    `${env.PEXELS_API_URL}/curated`
  );

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
