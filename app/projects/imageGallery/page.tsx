import { FunctionComponent } from 'react';
import './page-img-gallery.css';

interface IndexProps {
  children?: React.ReactNode;
}

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div>
      <h1 className="heading">Image gallery project</h1>
    </div>
  );
};

export default Index;
