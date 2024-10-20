import React from 'react';
import DefaultFrame from '../../../src/components/Defaultframe/Defaultframe';
import { BrowserRouter } from 'react-router-dom';
import { render, act } from '@testing-library/react';

describe('DefaultFrame Component', () => {
    it('should render correctly with title', () => {
        let container;

        act(() => {
            container = render(
                <BrowserRouter>
                    <DefaultFrame title="Example Title">
                        <p>Example Content</p>
                    </DefaultFrame>
                </BrowserRouter>
            );
        });

        const { getByText } = container;
        expect(getByText('Example Title')).toBeInTheDocument();
        expect(getByText('Example Content')).toBeInTheDocument();
    });
});
