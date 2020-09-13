import { createElement } from 'lwc';
import CompoundApiProperty from 'recipies/compoundApiProperty';

const part1Value = '123';
const part2Value = 'abc';
const splitString = '-';
const propertyValue = part1Value + splitString + part2Value;

describe('tets', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    test('property can be set and get', () => {
        /**
         * Given
         * -
         */

        /**
         * When
         * - when the component is added to DOM property set
         */
        const element = createElement('compound-api-property', {
            is: CompoundApiProperty
        });
        element.property = propertyValue;
        document.body.appendChild(element);

        /**
         * Then
         * the value can be requested
         */
        expect(element.property).toBe(propertyValue);
    });

    test('parts are available via api', () => {
        /**
         * Given
         * -
         */

        /**
         * When
         * - when the component is added to DOM property set
         */
        const element = createElement('compound-api-property', {
            is: CompoundApiProperty
        });
        element.property = propertyValue;
        document.body.appendChild(element);

        /**
         * Then
         * the parts of the value are available
         */
        expect(element.part1).toBe(part1Value);
        expect(element.part2).toBe(part2Value);
    });
});
