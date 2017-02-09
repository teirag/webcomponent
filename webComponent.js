(function() {
    "use strict";

    const template = `
        <style>
            
        </style>
        <div>
            A Button
        </div>
    `;

    class DoSearch extends HTMLElement {

		//getter
		const comp = document.querySelector('do-search');
		comp.value = 'hello';
		
		//setter
		comp.setAttribute('value', 'hello');
    }

    window.customElements.define('do-search', DoSearch);
})();

