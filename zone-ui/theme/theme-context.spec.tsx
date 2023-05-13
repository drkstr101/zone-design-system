import { render } from '@testing-library/react';
import React from 'react';
import { BasicThemeUsage } from './theme-context.composition';

it('should render the button in the light theme', () => {
  const { getByText } = render(<BasicThemeUsage />);
  const rendered = getByText('this should be light');
  expect(rendered).toBeTruthy();
});
