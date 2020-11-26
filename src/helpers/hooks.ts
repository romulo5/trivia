import { useState } from 'react';

export function useModal(isOpen: boolean) {
  const [isModalOpen, setModalState] = useState(isOpen);
  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  return { isModalOpen, toggleModal };
}
