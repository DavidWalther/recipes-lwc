import { createElement } from 'lwc';
import CallbackParent from 'recipies/callbackParent';

describe('', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    test('include element into DOM', () => {
        const handler = jest.fn();

        /**
         * Given
         * the parent cmp is added to DOM
         */
        const element = createElement('recipe-callback-parent', {
            is: CallbackParent
        });
        element.addEventListener('date', handler);
        document.body.appendChild(element);

        /**
         * When
         * it's button is clicked
         */
        const button = element.shadowRoot.querySelector('input[type=button]');
        button.dispatchEvent(new CustomEvent('click'));

        // Wait for events to be processed
        return Promise.resolve().then(() => {
            /**
             * Then
             * A 'date'-event is fired containing the value passed by the child component
             */

            expect(handler).toBeCalled();
            expect(handler.mock.calls[0][0]).toBeDefined();
            expect(handler.mock.calls[0][0].detail).toBeDefined();
            expect(handler.mock.calls[0][0].detail.timestamp).toBeDefined();
        });
    });
});
