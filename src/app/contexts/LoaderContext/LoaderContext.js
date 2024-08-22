import {createContext} from 'react';


export const LoaderContext = createContext({
	startLoader: ()=>{},
	stopLoader: ()=>{},
})
