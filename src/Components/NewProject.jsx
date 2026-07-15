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
      <Modal dialogRef={modal} buttonCaption="Close">
        <h2 className="text-2xl font-bold mb-3">Invalid Input</h2>

        <p className="mb-2">Oops! It looks like you forgot to enter a value.</p>

        <p className="mb-6">
          Please make sure every field contains a valid value.
        </p>
      </Modal>

      <div className="flex-1 flex justify-center items-start px-6 py-10">
        <div className="card bg-base-200 shadow-xl w-full max-w-2xl">
          <div className="card-body">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-base-content">
                Create New Project
              </h1>

              <p className="text-base-content/60 mt-2">
                Fill in the details below to create your project.
              </p>
            </div>

            <menu className="flex justify-end gap-3 mb-8">
              <li>
                <button className="btn btn-ghost" onClick={onCancel}>
                  Cancel
                </button>
              </li>

              <li>
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Project
                </button>
              </li>
            </menu>

            <div className="space-y-5">
              <Input ref={title} type="text" label="Title" />
              <Input ref={description} textarea label="Description" />
              <Input ref={dueDate} type="date" label="Due Date" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
