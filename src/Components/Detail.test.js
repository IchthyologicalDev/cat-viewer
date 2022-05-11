import { screen } from '@testing-library/react'
import { render, unmountComponentAtNode } from 'react-dom';
import { Detail } from './Detail';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('When provided text', () => {
    it('displays with the label and text value', () => {
        const label = 'Label';
        const detail = 'This is the details';
        render(<Detail label={label} text={detail}/>, container);

        const expected = `${label}: ${detail}`;
        expect(screen.getByText(expected)).toBeVisible();
    })
})

describe('When provided no text', () => {
    it('displays nothing', () => {
        const label = 'blah';

        render(<Detail label={label} />, container);

        expect(screen.queryByText(label)).not.toBeInTheDocument();
    })
})
