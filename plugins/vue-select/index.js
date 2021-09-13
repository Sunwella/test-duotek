import Vue from 'vue';
import VSelect from 'vue-select';
import './index.scss';

export default (context, inject) => {
	VSelect.props.components.default = () => ({
	  Deselect: {
	    render: createElement => createElement('FontAwesomeIcon', {
	    	props: {
	    		icon: 'times'
	    	}
	    }),
	  },
	  OpenIndicator: {
	    render: createElement => createElement('FontAwesomeIcon', {
	    	props: {
	    		icon: 'chevron-down'
	    	}
	    }),
	  },
	});

	Vue.component('v-select', VSelect);
}