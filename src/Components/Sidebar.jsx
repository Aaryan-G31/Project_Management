import Button from "./Button.jsx";

export default function Sidebar({
  onStart,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-950 text-stone-100 md:w-72 rounded-r-xl">
      <h1 className="mb-6">Projects</h1>

      <div className="flex items-center justify-between">
        <Button onClick={onStart}>+New Project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 runded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
