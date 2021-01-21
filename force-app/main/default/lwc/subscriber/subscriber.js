import { LightningElement, track, wire } from 'lwc';
import pubSub from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Subscriber extends LightningElement {
    //Get current page reference, wire it with imported variable.
    @wire(CurrentPageReference) pageRef;
    message = '';

    connectedCallback() {
        // subscribe to sendmessage event
        pubSub.registerListener("sendmessage", this.handleIncomingMessage, this);
    }

    disconnectedCallback() {
        // unsubscribe from sendmessage event
        unregisterAllListeners(this);
    }

    handleIncomingMessage(message){
        this.message = message;
    }
}