import { authModalState } from "@/atoms/AuthModalAtom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const useCloseModal = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const closeModal = () => {
      setAuthModalState((prev) => ({ ...prev, isOpen: false, type: "login" }));
    };
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => e.key == "Escape" && closeModal();
      window.addEventListener("keydown", handleEsc);
      return () => window.addEventListener("keydown", handleEsc);
    }, []);
    return closeModal;
  };
  export default useCloseModal; 