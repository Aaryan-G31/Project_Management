import { useState } from "react";
import { Plus } from "lucide-react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 mt-4">
      <input
        type="text"
        placeholder="Enter a task..."
        className="input input-bordered input-primary flex-1"
        value={enteredTask}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      />

      <button
        className="btn btn-primary gap-2 shadow-md hover:shadow-lg transition-all duration-200"
        onClick={handleClick}
      >
        <Plus size={18} />
        <span>Add Task</span>
      </button>
    </div>
  );
}