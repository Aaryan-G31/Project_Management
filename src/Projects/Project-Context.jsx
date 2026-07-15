import { createContext } from "react";
import { useState } from "react";

export const ProjectContext = createContext({
    projects: [],
    tasks: [],
});

export default function ProjectContextProvider({children}) {
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
    
      const ctxtValues = {
        projectsState,
        projects: projectsState.projects,
        selectedProjectId: projectsState.selectedProjectId,
        handleStart,
        handleAddProject,
        handleDeleteProject,
        handleCancel,
        handleSelectProject,
        handleAddTask,
        handleDeleteTask
      }

      return<ProjectContext value={ctxtValues}>
        {children}
      </ProjectContext>
}