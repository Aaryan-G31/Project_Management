import { createPortal } from "react-dom";
import Button from "./Button.jsx";
import { useEffect } from "react";

export default function Modal({ dialogRef, children, buttonCaption }) {
  useEffect(() => {
    console.log(dialogRef.current);
  }, []);
  return createPortal(
    <dialog
      ref={dialogRef}
      className="
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-full max-w-md rounded-2xl
    bg-base-100 text-base-content
    p-6 shadow-2xl
    backdrop:bg-black/70
      "
    >
      {children}

      <form method="dialog" className="mt-8 flex justify-end">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
