import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render correctly', () => {
    const component = render(<Home />);
  });
});