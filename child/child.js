//import missing decorator
import { LightningElement, ...} from 'lwc';

export default class Child extends LightningElement {
    ... number1; //expose attribute to parent
    ... number2; //expose attribute to parent

    handleMultiply() {
        const result = this.number1 * this.number2;

        // name you custum event
        const multiplyResultEvent = new CustomEvent(..., {
            //send data back to parent
            ...
        });
        this.dispatchEvent(multiplyResultEvent);
    }
}