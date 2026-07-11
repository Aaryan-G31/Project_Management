import Button from "./Button.jsx";

export default function Sidebar({
  onStart,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-base-300 text-base-content md:w-72 rounded-r-xl">
      <h1 className="text-xs uppercase tracking-widest text-base-content/50 font-semibold">Projects</h1>

      <div className="flex items-center justify-between">
        <Button onClick={onStart}>+New Project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let cssClasses =
            "w-full rounded-xl px-4 py-3 text-left transition-all duration-200";

          if (project.id === selectedProjectId) {
            cssClasses += "bg-base-200 text-gold font-semibold shadow-md";
          } else {
            cssClasses += "text-neutral-content hover:bg-base-200";
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
