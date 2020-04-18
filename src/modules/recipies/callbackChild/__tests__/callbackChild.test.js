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
        const handler = jest.fn();

        /**
         * Given
         * An instance of the child component is created
         */
        const element = createElement('recipe-callback-child', {
            is: CallbackChild
        });
        element.addEventListener('date', handler);

        /**
         * When
         * The childs method is called without a callback
         */
        element.returnDate();

        // Wait for events to be processed
        return Promise.resolve().then(() => {
            /**
             * Then
             * A 'date'-event is fired including the current date
             */
            expect(handler).toBeCalled();
            expect(handler.mock.calls[0][0]).toBeDefined();
            expect(handler.mock.calls[0][0].detail).toBeDefined();
            expect(handler.mock.calls[0][0].detail.timestamp).toBeDefined();
        });
    });
});
