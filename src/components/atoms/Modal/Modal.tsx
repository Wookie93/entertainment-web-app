import { createPortal } from 'react-dom';
import { useStoreActions } from '../../../store/store';

const Modal = ({ content }: { content: string }) => {
  const { setModalState } = useStoreActions();
  const modalHTMLElement = document.getElementById('modal') as Element;

  function closeModal() {
    setModalState(false);
  }

  return createPortal(
    <div>
      <button onClick={closeModal}>X</button>
      <p>{content}</p>
    </div>,
    modalHTMLElement
  );
};

export default Modal;
