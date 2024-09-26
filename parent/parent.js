import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    number1;
    number2;
    result;

    handleNumber1Change(event) {
        this.number1 = event.target.value;
    }

    handleNumber2Change(event) {
        this.number2 = event.target.value;
    }


    handleMultiplyResult(event) {
        //consume data coming from child event
        this.result = ...; 
    }
}