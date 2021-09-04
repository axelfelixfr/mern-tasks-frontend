import React, { useContext, useEffect } from 'react';
import { Breakpoints } from '../utilities/Breakpoints';
import LogoTask from '../../assets/task.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonMenu,
  MenuItem
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faPlus,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { ProjectContext } from '../../context/ProjectContext';
import { TasksContext } from '../../context/TasksContext';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
`;

const LogoHeader = styled.div`
  text-align: center;

  h5 {
    margin: 0;
  }
`;

export const Header = () => {
  const ProjectsContext = useContext(ProjectContext);
  const { openModalProject, projects, getProjects, selectedProject } =
    ProjectsContext;

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

  const { isTabletOrMobile, isDesktopOrLaptop } = Breakpoints();

  const handleOpenModal = () => {
    openModalProject(true);
  };

  return (
    <>
      <HeaderContainer>
        {isDesktopOrLaptop && (
          <article>
            <h1
              className={css`
                margin: 0;
              `}
            >
              Hola Axel
            </h1>
          </article>
        )}
        <LogoHeader>
          {isTabletOrMobile && (
            <>
              <img src={LogoTask} alt="rainbow logo" height="50" />
              {/* <h4
                    className={css`
                      margin: 0;
                    `}
                  >
                    Hola Axel
                  </h4> */}
            </>
          )}
        </LogoHeader>

        {isTabletOrMobile && (
          <article
            className={css`
              align-self: center;
            `}
          >
            <ButtonGroup>
              <ButtonIcon
                variant="border"
                onClick={handleOpenModal}
                icon={<FontAwesomeIcon icon={faPlus} />}
              />
              {!!projects.length && (
                <ButtonMenu
                  menuSize="x-small"
                  menuAlignment="right"
                  icon={<FontAwesomeIcon icon={faAngleDown} />}
                >
                  <MenuItem label="Tus Proyectos" variant="header" />
                  {projects.map(project => (
                    <MenuItem
                      onClick={() => handleProjectSelected(project.id)}
                      key={project.id}
                      label={project.name}
                    />
                  ))}

                  {/* <MenuItem label="Menu Item" /> */}
                  {/* <MenuDivider variant="space" />
                <MenuItem
                  label="Right Icon"
                  icon={<FontAwesomeIcon icon={faTasks} />}
                  iconPosition="right"
                /> */}
                </ButtonMenu>
              )}
            </ButtonGroup>
          </article>
        )}
        <div
          className={css`
            align-self: center;
          `}
        >
          {isDesktopOrLaptop && (
            <Button variant="destructive">
              Cerrar sesión
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className={css`
                  margin-left: 10px;
                `}
              />
            </Button>
          )}

          {isTabletOrMobile && (
            <Button variant="destructive">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="lg"
                className={css`
                  margin-top: 8px;
                  margin-bottom: 8px;
                `}
              />
            </Button>
          )}
        </div>
      </HeaderContainer>
    </>
  );
};
