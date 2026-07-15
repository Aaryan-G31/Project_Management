import ProjectNotSelected from "./Components/ProjectNotSelected.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import NewProject from "./Components/NewProject.jsx";
import SelectedProject from "./Components/selectedProject.jsx";
import { ProjectContext } from "./Projects/Project-Context.jsx";
import {useContext} from 'react'
function App() {
  const {
    projectsState,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
    handleCancel,
    handleAddProject,
    handleStart}= useContext(ProjectContext);

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
    <>
    <main className="flex h-screen gap-4 py-8 bg-base-100 ">
      <Sidebar/>
      {content}
    </main>
    </>
  );
}

export default App;
