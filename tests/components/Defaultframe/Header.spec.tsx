import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderPage from '../../../src/components/Defaultframe/Header';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-icons/fa', () => ({
    FaUserAlt: () => <div>FaUserAlt</div>,
}));
jest.mock('react-icons/ci', () => ({
    CiLogout: () => <div>CiLogout</div>,
}));

describe('HeaderPage', () => {
    test('renders logo and user icon', () => {
        render(
            <MemoryRouter>
                <HeaderPage />
            </MemoryRouter>
        );

        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();

        const userIcon = screen.getByText(/FaUserAlt/i);
        expect(userIcon).toBeInTheDocument();
    });
});
