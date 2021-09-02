import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import { TasksContext } from '../../context/TasksContext';
import { css } from '@emotion/css';
import {
  VerticalItem,
  VerticalNavigation,
  VerticalSection
} from 'react-rainbow-components';

export const ListProjects = () => {
  const ProjectsContext = useContext(ProjectContext);
  const { projects, getProjects, selectedProject } = ProjectsContext;

  // Context de tareas
  const ListTasksContext = useContext(TasksContext);
  const { getTasksFromProyect } = ListTasksContext;

  // Seleccionar proyecto
  const handleProjectSelected = idProject => {
    // Seleccionar el proyecto al que se dio click
    selectedProject(idProject);
    // Filtrar tareas por proyecto
    getTasksFromProyect(idProject);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <VerticalNavigation
      // selectedItem={selectedItem}
      //       onSelect={this.handleOnSelect}
      >
        {!projects.length ? (
          <VerticalSection
            label="No hay proyectos"
            className={css`
              text-align: center;
            `}
          ></VerticalSection>
        ) : (
          <VerticalSection
            label="Tus Proyectos"
            className={css`
              text-align: center;
            `}
          >
            {projects.map(project => (
              <VerticalItem
                onClick={() => handleProjectSelected(project.id)}
                key={project.id}
                name={project.name}
                label={project.name}
              />
            ))}
          </VerticalSection>
        )}
      </VerticalNavigation>
    </>
  );
};
