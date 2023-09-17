import { FunctionComponent } from 'react';
import './page-img-gallery.css';
import Gallery from './components/Gallery/Gallery';

interface IndexProps {
  children?: React.ReactNode;
}

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div>
      <h1 className="heading">Image gallery project</h1>
      <Gallery />
    </div>
  );
};

export default Index;
