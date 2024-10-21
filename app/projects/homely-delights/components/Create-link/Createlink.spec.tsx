import { render } from '@testing-library/react';

import CreatLink from './CreateLink';

describe('CreatLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreatLink />);
    expect(baseElement).toBeTruthy();
  });
});
