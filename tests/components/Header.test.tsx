import { render, screen } from '@testing-library/react';
import Header from '@/app/(components)/layout/Header';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname() {
    return '/';
  },
}));

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
