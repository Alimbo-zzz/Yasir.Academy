import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from '@/redux';
import '@/styles/index.scss';
import { ModalProvider, LoaderProvider } from '@contexts';



function Wrapper({children}) {
  return (
    <Provider store={store}>
    <ModalProvider>
    <LoaderProvider>
      <div className="wrapper">
        {children}
  		</div>
    </LoaderProvider>
    </ModalProvider>
    </Provider>
  );
}

export default Wrapper;
