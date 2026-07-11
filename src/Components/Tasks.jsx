import NewTask from "./NewTask.jsx";
import { Trash2 } from "lucide-react";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-base-content mb-4">
        Tasks
      </h2>

      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-base-300 bg-base-200 p-8 text-center">
          <p className="text-base-content/70">
            This project doesn't have any tasks yet.
          </p>
        </div>
      )}

      {tasks.length > 0 && (
        <ul className="mt-8 space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-xl bg-base-200 px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="text-base-content">{task.text}</span>

              <button
                className="btn btn-sm btn-error btn-outline"
                onClick={() => onDelete(task.id)}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}