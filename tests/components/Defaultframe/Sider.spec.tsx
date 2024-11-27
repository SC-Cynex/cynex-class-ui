import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SiderPage from '../../../src/components/Defaultframe/Sider';

jest.mock('react-icons/fa', () => ({
    FaUsers: () => <div>FaUsers</div>,
    FaUserPlus: () => <div>FaUserPlus</div>,
    FaRegCalendarPlus: () => <div>FaRegCalendarPlus</div>,
    FaGear: () => <div>FaGear</div>,
    FaLaptop: () => <div>FaLaptop</div>,
}));

jest.mock('react-icons/fi', () => ({
    FiMenu: () => <div>FiMenu</div>,
}));

describe('SiderPage', () => {
    test('renders the menu and button', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <SiderPage />
            </MemoryRouter>
        );

        const menuButton = screen.getByRole('button', { name: /menu/i });
        expect(menuButton).toBeInTheDocument();

        expect(screen.getByText(/portal/i)).toBeInTheDocument();
        expect(screen.getByText(/quadro de horários/i)).toBeInTheDocument();
        expect(screen.getByText(/inscrição/i)).toBeInTheDocument();
        expect(screen.getByText(/turmas/i)).toBeInTheDocument();
        expect(screen.getByText(/registrar/i)).toBeInTheDocument();
        expect(screen.getByText(/configurações/i)).toBeInTheDocument();
    });

    test('collapses and expands the menu', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <SiderPage />
            </MemoryRouter>
        );

        const menuButton = screen.getByRole('button', { name: /menu/i });
        expect(menuButton).toBeInTheDocument();

        fireEvent.click(menuButton);

        expect(screen.getByText(/portal/i)).toBeInTheDocument();
        expect(screen.getByText(/quadro de horários/i)).toBeInTheDocument();
    });

    test('navigates to the selected menu item', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/']}>
                <SiderPage />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/portal/i));

        expect(container.innerHTML).toContain('/portal');
    });
});
