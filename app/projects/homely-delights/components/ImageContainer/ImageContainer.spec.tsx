import { render } from '@testing-library/react';

import ImageContainer from './ImageContainer';

describe('ImageContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageContainer />);
    expect(baseElement).toBeTruthy();
  });
});
