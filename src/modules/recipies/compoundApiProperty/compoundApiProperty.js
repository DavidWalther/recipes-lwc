import { LightningElement, api } from 'lwc';
export default class CompoundApiProperty extends LightningElement {
    @api
    get property() {
        return this.joinParts();
    }
    set property(value) {
        if (value) {
            this.splitParts(value);
        }
    }

    joinParts() {
        return this.part1 + '-' + this.part2;
    }

    splitParts(originalValue) {
        const originalValueList = originalValue.split('-');
        this.part1Value = originalValueList[0];
        this.part2Value = originalValueList[1];
    }

    @api
    get part1() {
        return this.part1Value;
    }

    @api
    get part2() {
        return this.part2Value;
    }

    part1Value;
    part2Value;
}
