import { useState } from "react";

interface UseToggleReturnType {
  toggleOpen: () => void;
  toggleClose: () => void;
  isOpen: boolean;
}

const useToggle = (): UseToggleReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = (): void => {
    setIsOpen(true);
  };

  const toggleClose = (): void => {
    setIsOpen(false);
  };

  return { toggleOpen, toggleClose, isOpen };
};

export default useToggle;
