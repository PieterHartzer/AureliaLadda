import {customAttribute, inject, bindable} from 'aurelia-framework';
import Ladda from 'ladda';

@inject(Element)
export class LaddaCommandCustomAttribute {
  @bindable command;

	constructor(element) {
		this.element = element;
	} 

	attached() {
		// make sure that we were passed a function
		if (typeof this.command === 'function') {
			// listen for click events on the element
			this.element.addEventListener('click', event => {
				// create a ladda element
				let ladda = Ladda.create(this.element);
				// start the animation
				ladda.start();

				// call the function passed in
				this.command.apply(this.bindingContext).then(() => {
					// stop the button when the event completes
					ladda.stop();				
				});
			});
	    }
	    else {
	    	// let the consumer know that we do not have a command
	      	throw `attached attribute invoked, but command was '${this.command}' instead of a function.`;
	    }
	}

	bind(bindingContext) {
		// Keep the binding context of the element
		this.bindingContext = bindingContext;
	}

	detached() {
		// remove the click event from the element
		this.element.removeEventListener('click', event => { /* do something - log? */});
	}
}
