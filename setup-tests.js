import '@testing-library/jest-dom';

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
        if (message.includes('act(...)')) {
            return;
        }
    });
});

