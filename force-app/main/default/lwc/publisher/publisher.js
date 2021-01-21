import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import pubSub from 'c/pubSub'

export default class Publisher extends LightningElement {
    //Get current page reference, wire it with imported variable.
    @wire(CurrentPageReference) pageRef;
    message = '';

    handleMessageChange(event){
        this.message = event.target.value;
    }

    handlePublish(){
        //Publish | Fire event
        pubSub.fireEvent(this.pageRef, 'sendmessage', this.message);
        this.message = '';
    }
}