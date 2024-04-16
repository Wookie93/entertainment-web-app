import { createPortal } from 'react-dom';
import { useStoreActions, useUserModal } from '../../../store/store';

const Modal = ({ content }: { content: string }) => {
  const { setModalState } = useStoreActions();
  const modalState = useUserModal();

  function createWrapperAndAppendToBody() {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', 'modal');
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

  let modalHTMLElement = document.getElementById('modal') as Element;

  if (!modalHTMLElement) modalHTMLElement = createWrapperAndAppendToBody();

  function closeModal() {
    setModalState(false);
  }

  if (!modalState) return null;

  return createPortal(
    <div className="fixed w-3/4 min-h-[200px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[99999] flex items-center justify-center bg-bcg-light rounded-[10px] ">
      <button className="absolute top-[10px] right-[20px]" onClick={closeModal}>
        X
      </button>
      <p>{content}</p>
    </div>,
    modalHTMLElement
  );
};

export default Modal;
