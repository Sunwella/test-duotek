import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import 'vue-select/dist/vue-select.css';

export default () => {
	library.add(faBars);
	library.add(faChevronUp);
	library.add(faChevronDown);
	library.add(faTimes);

	Vue.component('FontAwesomeIcon', FontAwesomeIcon);
};
