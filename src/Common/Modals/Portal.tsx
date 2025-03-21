import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  onClose: () => void;
}

const Portal = ({ children, onClose }: PortalProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#202020A6] flex justify-center items-center p-8">
        <div className="relative">
          <span
            onClick={onClose}
            className="absolute top-2 right-2 bg-[#999CBD] rounded-full text-white p-1 cursor-pointer"
          >
            X
          </span>
          {children}
        </div>
      </div>,
      ref.current
    )
    : null;
};

export default Portal;