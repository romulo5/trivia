import { useState, useCallback } from 'react';

export function useModal(isOpen: boolean) {
  const [isModalOpen, setModalState] = useState(isOpen);

  const useToggleModal = useCallback(() => { return setModalState(!isModalOpen); }, [isModalOpen]);

  return { isModalOpen, useToggleModal };
}
