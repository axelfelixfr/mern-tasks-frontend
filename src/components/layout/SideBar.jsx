import React from 'react';
import {
  Chip,
  Sidebar,
  SidebarItem,
  VerticalItem,
  VerticalNavigation,
  VerticalSection
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import LogoTask from '../../assets/task.svg';

const Logo = styled.div`
  text-align: center;
  padding-top: 1rem;
`;

export const SideBar = ({ setOpenModal }) => {
  const titleStyles = {
    marginBottom: 10
  };

  const handleOnClick = () => {
    setOpenModal(true);
  };

  // const handleOnSelect = (event, selectedItem) => {
  //   setState({ selectedItem });
  // }

  return (
    <>
      <Sidebar id="sidebar">
        <Logo>
          <Chip
            className="rainbow-m-around_medium"
            label="MERNTasks"
            variant="neutral"
            style={titleStyles}
          />
          <img
            src={LogoTask}
            alt="Logo Task"
            width="70"
            className={css`
              margin: 0;
              padding: 0;
            `}
          />
        </Logo>
        <SidebarItem
          icon={<FontAwesomeIcon icon={faPlusCircle} />}
          name="NuevoProyecto"
          className={css`
            color: #01b6f5;
          `}
          label="Nuevo Proyecto"
          onClick={handleOnClick}
        />
        <VerticalNavigation
        // selectedItem={selectedItem}
        //       onSelect={this.handleOnSelect}
        >
          <VerticalSection label="TUS PROYECTOS">
            <VerticalItem name="item-1" label="Recent" />
            <VerticalItem name="item-2" label="Projects" />
            <VerticalItem name="item-3" label="Settings" />
          </VerticalSection>
        </VerticalNavigation>
      </Sidebar>
    </>
  );
};
