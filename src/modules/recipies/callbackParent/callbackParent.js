import { LightningElement } from 'lwc';

export default class CallbackParent extends LightningElement {
    onClickButtonChildCallback() {
        const value = this.callMethodAndReturnDate();
        this.fireEvent(value);
    }

    callMethodAndReturnDate() {
        const callbackChild = this.template.querySelector(
            'recipies-callback-child'
        );

        let returnValue;
        /**
         * create a anonymous function and
         * pass it as method parameter to child component
         *
         * the anonymous function expects a parameter
         * and copies it's value into 'returnValue'
         *
         * (value) => {
         *   returnValue = value;
         * }
         */
        callbackChild.returnDate((value) => {
            returnValue = value;
        });
        return returnValue;
    }

    fireEvent(value) {
        const evt = new CustomEvent('date', { detail: { timestamp: value } });
        this.dispatchEvent(evt);
    }
}
