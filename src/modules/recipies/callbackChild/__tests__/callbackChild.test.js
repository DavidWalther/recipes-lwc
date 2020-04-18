import { createElement } from 'lwc';
import CallbackChild from 'recipies/callbackChild';

describe('', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    test('include element into DOM', () => {
        const element = createElement('recipe-callback-child', {
            is: CallbackChild
        });
        document.body.appendChild(element);
    });
});
