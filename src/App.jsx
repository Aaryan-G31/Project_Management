import { useState } from "react";
import ProjectNotSelected from "./Components/ProjectNotSelected.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import NewProject from "./Components/NewProject.jsx";
import SelectedProject from "./Components/selectedProject.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStart() {
    setProjectsState((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: null,
      };
    });
  }
  function handleCancel() {
    setProjectsState((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevSate) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevSate,
        selectedProjectId: undefined,
        projects: [...prevSate.projects, newProject],
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState((prevSate) => {
      return {
        ...prevSate,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevSate) => {
      const taskId = Math.random();
      const newtask = {
        text: text,
        projectId: prevSate.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevSate,
        tasks: [newtask, ...prevSate.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );
  const selectedTask = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <ProjectNotSelected onStart={handleStart} />;
  }

  return (
    <div>
    <main className="flex h-screen gap-4 py-8 bg-base-100 ">
      <Sidebar
        onStart={handleStart}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
    </div>
  );
}

export default App;
