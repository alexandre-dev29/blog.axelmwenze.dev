import { render } from '@testing-library/react';

import FeaturedArticle from './featured-article';

describe('FeaturedArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedArticle />);
    expect(baseElement).toBeTruthy();
  });
});
