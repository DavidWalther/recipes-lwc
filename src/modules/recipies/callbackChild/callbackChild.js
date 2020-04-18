import { LightningElement, api } from 'lwc';

export default class CallbackChild extends LightningElement {
    @api
    returnDate(callback) {
        const currentDate = Date.now();

        if (callback) {
            callback(currentDate);
        }
        if (!callback) {
            this.fireEvent(currentDate);
        }
    }

    fireEvent(currentDate) {
        const evt = new CustomEvent('date', { detail: { value: currentDate } });
        this.dispatchEvent(evt);
    }
}
