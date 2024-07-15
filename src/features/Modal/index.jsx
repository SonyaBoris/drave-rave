import { useEffect } from 'react';
import ReactDOM from 'react-dom';


export const Modal = ({ children }) => {

  const el = document.createElement('div');

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};