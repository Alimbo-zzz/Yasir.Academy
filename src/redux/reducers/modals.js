export default modals;
export {open_modal, close_modal}


const defaultState = {
	privacy:{isOpen: false, data: {}},
};

const OPEN = 'OPEN_MODAL';
const CLOSE = 'CLOSE_MODAL';

// ____ funcs _____
function modals(state = defaultState, action){
	switch (action.type) {
		case OPEN:	return {...state, [action.name]:{isOpen: true, data: action.options}  };
		case CLOSE: return {...state, [action.name]:{isOpen: false, data: action.options}  };

		default: return state
	}
}

// _____ actions ______
function open_modal(name, options={}){
	return {type: OPEN, name,	options}
}

function close_modal(name, options={}){
	return {type: CLOSE, name, options}
}
