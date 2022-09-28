import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

/**
 * ? Describe is the way we setup a test suite. A suite contains one or more tests
 * ? The callback contains the tests
 * ? it() is how you test;
 */

import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders hellow world', () => {
        //TODO: Arrange
        render(<WrappedApp />);
        //TODO: Act
        // we might not always have an act, comes into play when you need to click a button or fill out an input
        //TODO: Expect
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World');
    });

    it('Renders not found if invalid path', () => {
        //TODO: Arrange
        render(
            <MemoryRouter initialEntries={['/doesnt-exist']}>
                <App />
            </MemoryRouter>
        );
        //TODO: Act
        //TODO: Expect
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found');
    });
});
