import Button from "./Button.jsx";

export default function ProjectNotSelected({ onStart }) {
  return (
    <div className="flex flex-1 items-center justify-center ">
      <div>
        <h1 className="text-3xl text-stone-100 font-semibold">
          No Project Selected
        </h1>
        <p className="mt-4 font-semibold text-stone-100">
          Select a Project or Create a New Project
        </p>
      </div>
      <div>
        <Button onClick={onStart}>Create Project</Button>
      </div>
    </div>
  );
}
