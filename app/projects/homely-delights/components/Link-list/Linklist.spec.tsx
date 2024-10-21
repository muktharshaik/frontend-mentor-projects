import { render } from '@testing-library/react';

import LinkList from './LinkList';

describe('LinkList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkList />);
    expect(baseElement).toBeTruthy();
  });
});
