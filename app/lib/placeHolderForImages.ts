import { getPlaiceholder } from 'plaiceholder';
import type { Photo, ImagesResults } from '../models/ImageSchema';

const getBase64 = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch, in getBase64');
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export default async function blurredImageData(
  data: ImagesResults
): Promise<Photo[]> {
  const photos: Photo[] = await Promise.all(
    data.photos.map(async (photo) => {
      const blurredDataUrl = await getBase64(photo.src.large);
      return { ...photo, blurredDataUrl };
    })
  );
  return photos;
}
