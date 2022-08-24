import { render } from '@testing-library/react';

import ShareArticle from './share-article';

describe('ShareArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShareArticle />);
    expect(baseElement).toBeTruthy();
  });
});
