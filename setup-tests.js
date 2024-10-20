import '@testing-library/jest-dom';

// Remove warning de depreciação do findDOMNode nos testes ocasionado pelo antd
beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
        if (message.includes('act(...)')) {
            return;
        }
    });
});

