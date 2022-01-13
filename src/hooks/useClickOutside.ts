import React, { useState, useEffect, useRef } from "react";

const useClickOutside = (ref: React.MutableRefObject<any>) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const refNode: React.MutableRefObject<undefined> | any = useRef(ref);

  useEffect(() => {
    const checkRef = (event: MouseEvent) => {
      if (!refNode.current.contains(event.target)) {
        setIsOpen(false);
      }

      setIsOpen(true);
    };
  }, [ref]);

  return { refNode, isOpen };
};

export default useClickOutside;
