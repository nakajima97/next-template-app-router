import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home', () => {
  it('renders hello world message', () => {
    render(<Home />);
    expect(screen.getByText('Hello, world!')).toBeDefined();
  });
});
