import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import { css } from '@emotion/css';
import {
  VerticalItem,
  VerticalNavigation,
  VerticalSection
} from 'react-rainbow-components';

export const ListProjects = () => {
  const ProjectsContext = useContext(ProjectContext);
  const { projects, getProjects } = ProjectsContext;

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
