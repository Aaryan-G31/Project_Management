import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">

        <header className="pb-8 border-b border-base-300">

          <div className="flex items-start justify-between gap-6">

            <div>
              <h1 className="text-4xl font-bold text-base-content">
                {project.title}
              </h1>

              <p className="mt-2 text-sm text-base-content/60">
                Due • {formattedDate}
              </p>
            </div>

            <button
              className="btn btn-error btn-outline btn-sm"
              onClick={onDeleteProject}
            >
              Delete
            </button>

          </div>

          <div className="divider"></div>

          <p className="text-base leading-8 whitespace-pre-wrap text-base-content/80">
            {project.description}
          </p>

        </header>

        <div className="mt-10">
          <Tasks
            onAdd={onAddTask}
            onDelete={onDeleteTask}
            tasks={tasks}
          />
        </div>

      </div>
    </section>
  );
}