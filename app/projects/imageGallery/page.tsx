import { FunctionComponent } from 'react';
import './page-img-gallery.css';
import Gallery from './components/Gallery/Gallery';

const Index: FunctionComponent = () => {
  return (
    <div>
      <h1 className="heading">Image gallery project</h1>
      <Gallery />
    </div>
  );
};

export default Index;
