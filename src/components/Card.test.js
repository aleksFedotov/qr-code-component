import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card testing', () => {
  test('code rendering', () => {
    render(<Card />);

    const qrCode = screen.getByRole('img');
    expect(qrCode).toBeInTheDocument();
    expect(qrCode.src).toContain('image-qr-code.png');
  });

  test('Heading rendering', () => {
    render(<Card />);
    const header = screen.getByRole('heading', { level: 1 });

    expect(header).toHaveTextContent(
      'Improve your front-end skills by building projects'
    );
  });

  test('text rendering', () => {
    render(<Card />);
    const text = screen.getByText(
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
    );

    expect(text).toBeInTheDocument();
  });
});
