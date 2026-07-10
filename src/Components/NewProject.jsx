import { useRef } from "react";
import Input from "./Inputs.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onCancel, onSave }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.showModal();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value{" "}
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[25rem] mt-4">
        <menu className="flex justify-end gap-3">
          <li>
            <button
              className="btn btn-ghost hover:bg-stone-600 border-0 text-stone-100"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost hover:bg-stone-600 border-0 text-stone-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} textarea label="Description" />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
