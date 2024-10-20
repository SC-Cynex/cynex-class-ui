import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthRoutes from "../../src/routes/AuthRoutes";

jest.mock('../../src/pages/Auth/Login/LoginPage', () => () => <div>Login Page</div>);
jest.mock('../../src/pages/Auth/Register/RegisterPage', () => () => <div>Register Page</div>);
jest.mock('../../src/pages/NotFound/NotFoundPage', () => () => <div>Not Found Page</div>);

describe('AuthRoutes', () => {
    test('renders LoginPage for /login route', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthRoutes />
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeInTheDocument();
    });

    test('renders RegisterPage for /register/user route', () => {
        render(
            <MemoryRouter initialEntries={['/register/user']}>
                <AuthRoutes />
            </MemoryRouter>
        );
    
        expect(screen.getByText('Register Page')).toBeInTheDocument();
    });
    

    test('renders NotFoundPage for unknown route', () => {
        render(
            <MemoryRouter initialEntries={['/unknown']}>
                <AuthRoutes />
            </MemoryRouter>
        );

        expect(screen.getByText('Not Found Page')).toBeInTheDocument();
    });
});
