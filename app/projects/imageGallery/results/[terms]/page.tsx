import { Metadata } from 'next';
import Gallery from '../../components/Gallery/Gallery';

type Props = {
  params: {
    terms: string;
  };
};

export function generateMetadata({ params: { terms } }: Props): Metadata {
  return {
    title: `Results of - ${terms}`,
  };
}

export default function SearchResults({ params: { terms } }: Props) {
  return <Gallery topic={terms} />;
}
