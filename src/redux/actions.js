import * as modals from './reducers/modals.js';
import * as about from './reducers/about.js';



export default {
	...modals,
	...about,
	default: '',
};
