import { screen } from '@testing-library/react'
import { render, unmountComponentAtNode } from 'react-dom';
import { CatDetails } from './CatDetails';

let container = null;
const CAT_WITHOUT_BREED = {
    url: 'some-fake-url',
    breeds: []
}

const CAT_WITH_BREED = {
    url: 'some-fake-url',
    breeds: [
        {
            name: 'Maine Coon',
            temperament: 'docile, catty',
            origin: 'Maine',
            description: 'The Maine Coon is one of the only tolerable cats'
        }
    ]
}

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('When provided Cat', () => {
    describe('without any breed', () => {
        it('displays only the url', () => {
            render(<CatDetails cat={CAT_WITHOUT_BREED}/>, container);
    
            const expectedVisible = CAT_WITHOUT_BREED.url;
            expect(screen.getByText(`Url: ${expectedVisible}`)).toBeVisible();
            expect(screen.queryByTestId('breed')).toBeNull();
        })
    })

    describe('with at least one breed', () => {
        it('displays only the url', () => {
            render(<CatDetails cat={CAT_WITH_BREED}/>, container);
    
            const expectedVisible = CAT_WITH_BREED.url;
            expect(screen.getByText(`Url: ${expectedVisible}`)).toBeVisible();
            expect(screen.getByText(`Breed: ${CAT_WITH_BREED.breeds[0].name}`)).toBeVisible();
        })
    })
})
