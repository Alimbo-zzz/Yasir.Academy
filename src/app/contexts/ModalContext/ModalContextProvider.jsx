import React, {useState} from 'react';
import {ModalContext} from "./ModalContext";
import Modal from './Modal';
import {CSSTransition} from 'react-transition-group';
import './animation.scss';


export const ModalProvider = ({children}) => {
	const [modalOpened, setModalOpened] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const timeout = 400;

	const openModal = (modalConfig)=>{
		setModalContent(modalConfig);
		setModalOpened(true);
	}

	const closeModal = ()=>{
		setModalOpened(false);
		const closed_delay = setTimeout(()=>{
			setModalContent(null);
			clearTimeout(closed_delay);
		}, timeout)
	}

	const valueModalProvider = {
		openModal, closeModal, modalOpened, modalContent
	}

	// контент для модального окна передается через ключ {children: (<div>content</div>)}

	return (
		<ModalContext.Provider value={valueModalProvider}>
			<CSSTransition in={modalOpened} classNames='modal' timeout={timeout} unmountOnExit>
				<Modal {...valueModalProvider} {...modalContent} />
			</CSSTransition>

			{children}
		</ModalContext.Provider>
	)
}
