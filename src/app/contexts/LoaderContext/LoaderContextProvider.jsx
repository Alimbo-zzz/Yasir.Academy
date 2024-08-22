import React, {useState} from 'react';
import {LoaderContext} from "./LoaderContext";
import {CSSTransition} from 'react-transition-group';
import Loader from './Loader';
import './animation.scss';


export const LoaderProvider = ({children}) => {
	const [loaderOpened, setLoaderOpened] = useState(false);
	const [loaderContent, setLoaderContent] = useState(null);
	const timeout = 400;

	const startLoader = (modalConfig)=>{
		setLoaderContent(modalConfig);
		setLoaderOpened(true);
	}

	const stopLoader = ()=>{
		setLoaderOpened(false);
		const closed_delay = setTimeout(()=>{
			setLoaderContent(null);
			clearTimeout(closed_delay);
		}, timeout)
	}

	const valueLoaderProvider = {
		startLoader, stopLoader, loaderOpened, loaderContent
	}

	// контент для модального окна передается через ключ {children: (<div>content</div>)}

	return (
		<LoaderContext.Provider value={valueLoaderProvider}>
			<CSSTransition in={loaderOpened} classNames='page-loader' timeout={timeout} unmountOnExit>
				<Loader {...valueLoaderProvider} {...loaderContent} />
			</CSSTransition>

			{children}
		</LoaderContext.Provider>
	)
}
