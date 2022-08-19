import { render } from '@testing-library/react';

import ArticleByCategoryContainer from './article-by-category-container';

describe('ArticleByCategoryContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleByCategoryContainer />);
    expect(baseElement).toBeTruthy();
  });
});
