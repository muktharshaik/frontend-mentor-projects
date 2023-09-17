import type { ImagesResults } from '../models/ImageSchema';
import { ImageSchemaWithPhotos } from '../models/ImageSchema';
import env from './env';

export default async function fetchImagesData(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const data: ImagesResults = await res.json();
    const result = ImageSchemaWithPhotos.parse(data);
    if (result.total_results === 0) {
      return undefined;
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
