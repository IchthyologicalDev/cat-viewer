import { screen } from '@testing-library/react'
import { render, unmountComponentAtNode } from 'react-dom';
import { CatContainer } from './CatContainer';
import { request } from "../Utilities/http-service"


let container = null;
const mockCATS = [];
for(let i = 0; i < 10; i++) {
    mockCATS.push({url:`test-url:${i}`});
}

beforeEach(() => {
    jest.mock('../Utilities/http-service', () => ({
        request: jest.fn(() => new Promise(mockCATS))
    }))
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    jest.resetAllMocks();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('On initial load', () => {
    
    it('renders the first cat', () => {
        render(<CatContainer />, container);

        expect(await screen.findByText('Url: test-url:1')).toBeVisible();
    })
})