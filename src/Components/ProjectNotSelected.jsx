import Button from "./Button.jsx";
import { FolderOpen } from "lucide-react";

export default function ProjectNotSelected({ onStart }) {
  return (
    <div className="flex flex-1 items-center justify-center -m-24">
      <div className="text-center max-w-md space-y-8">
        <div className="bg-primary/10 rounded-full p-6 inline-flex">
          <FolderOpen size={70} className="text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-base-content">
            No Project Selected
          </h1>

          <p className="mt-10 text-base text-base-content/70">
            Choose a project from the sidebar or create a new one to get
            started.
          </p>
        </div>

        <Button onClick={onStart}>+ Create Project</Button>
      </div>
    </div>
  );
}
