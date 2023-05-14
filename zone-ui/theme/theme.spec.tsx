import { render } from '@testing-library/react';
import React from 'react';
import { LightThemeExample } from './theme.composition';

it('should render the button in the light theme', () => {
  const { getByText } = render(<LightThemeExample />);
  const rendered = getByText('this should be light');
  expect(rendered).toBeTruthy();
});
