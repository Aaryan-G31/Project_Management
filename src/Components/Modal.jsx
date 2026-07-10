import { createPortal } from "react-dom";
import { useRef } from "react";
import Button from "./Button.jsx";

export default function Modal({ ref, children, buttonCaption }) {
  const dialog = useRef();
  return createPortal(
    <dialog
      ref={ref}
      className="rounded-2xl p-6 shadow-2xl bg-stone-100 backdrop:bg-black/70 max-w-md w-full"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
