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
