import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";

type CopyToClipboardProps = {
  className?: string;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ className }) => {
  return (
    <>
      <HiOutlineClipboardCopy className={className} />
    </>
  );
};

export default CopyToClipboard;
