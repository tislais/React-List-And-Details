import React from 'react';
import { render, screen } from '@testing-library/react';
import TlabCharacters from './TlabCharacters';

describe('TlabCharacters container', () => {
  it('displays a list of characters', async () => {
    render(<TlabCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    
    expect(ul).not.toBeEmptyDOMElement();
  });
});