import React, { useContext } from 'react';
import { ListProjects } from '../projects/ListProjects';
import { Chip, Sidebar, SidebarItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import LogoTask from '../../assets/task.svg';
import { ProjectContext } from '../../context/ProjectContext';

const Logo = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column-reverse;
  align-items: center;
  padding-top: 15px;
`;

export const SideBar = () => {
  const ProjectsContext = useContext(ProjectContext);
  const { openModalProject } = ProjectsContext;

  const handleOnClick = () => {
    openModalProject(true);
  };

  // const handleOnSelect = (event, selectedItem) => {
  //   setState({ selectedItem });
  // }

  return (
    <>
      <Sidebar
        id="sidebar"
        className={css`
          min-width: 250px;
        `}
      >
        <Logo>
          <Chip
            className="rainbow-m-around_medium"
            label="ProjectsMERN"
            variant="neutral"
          />
          <img
            src={LogoTask}
            alt="Logo Task"
            width="70"
            className={css`
              margin-bottom: 10px;
            `}
          />
        </Logo>
        <SidebarItem
          icon={<FontAwesomeIcon size="lg" icon={faPlusCircle} />}
          name="NuevoProyecto"
          className={css`
            color: #01b6f5;
          `}
          label="Nuevo Proyecto"
          onClick={handleOnClick}
        />

        <ListProjects />
      </Sidebar>
    </>
  );
};
