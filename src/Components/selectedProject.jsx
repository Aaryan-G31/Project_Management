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
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 boreder-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-stone-200 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-200 hover:bg-stone-900"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-200">{formattedDate}</p>
        <p className="text-stone-200 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} tasks={tasks} onDelete={onDeleteTask} />
    </div>
  );
}
