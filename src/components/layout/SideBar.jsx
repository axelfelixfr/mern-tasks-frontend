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
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import LogoTask from '../../assets/task.svg';

const Logo = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column-reverse;
  align-items: center;
  padding-top: 15px;
`;

export const SideBar = ({ setOpenModal }) => {
  const handleOnClick = () => {
    setOpenModal(true);
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
            label="MERNTasks"
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
        <VerticalNavigation
        // selectedItem={selectedItem}
        //       onSelect={this.handleOnSelect}
        >
          <VerticalSection
            label="TUS PROYECTOS"
            className={css`
              text-align: center;
            `}
          >
            <VerticalItem name="item-1" label="Recent" />
            <VerticalItem name="item-2" label="Projects" />
            <VerticalItem name="item-3" label="Settings" />
          </VerticalSection>
        </VerticalNavigation>
      </Sidebar>
    </>
  );
};
