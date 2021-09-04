import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import { TasksContext } from '../../context/TasksContext';
import { css } from '@emotion/css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../utilities/transition.css';
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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <VerticalNavigation>
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
            <TransitionGroup>
              {projects.map(project => (
                <CSSTransition key={project.id} timeout={500} classNames="item">
                  <VerticalItem
                    onClick={() => handleProjectSelected(project.id)}
                    name={'item' + project.id}
                    label={project.name}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </VerticalSection>
        )}
      </VerticalNavigation>
    </>
  );
};
