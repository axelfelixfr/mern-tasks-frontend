import React, { useState } from 'react';
import { SideBar } from '../layout/SideBar';
import styled from '@emotion/styled';
import {
  Avatar,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonMenu,
  MenuDivider,
  MenuItem,
  Modal
} from 'react-rainbow-components';
import { FormModal } from './FormModal';
import { Breakpoints } from '../layout/Breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faBell,
  faPencilAlt,
  faPlus,
  faSign,
  faSignOutAlt,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import LogoTask from '../../assets/task.svg';
import { css } from '@emotion/css';

const ContainerProjects = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContainerApp = styled.div`
  background-color: #fafaf9;
  width: 100%;
`;

const Header = styled.div`
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

export const ProjectsView = () => {
  const [isOpen, setOpenStatus] = useState(false);

  const { isTabletOrMobile, isDesktopOrLaptop, isBigScreen } = Breakpoints();

  const handleOpenModal = () => {
    setOpenStatus(true);
  };

  return (
    <ContainerProjects>
      {isDesktopOrLaptop && <SideBar setOpenModal={setOpenStatus} />}
      <ContainerApp>
        <section>
          <Header>
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
                  <img
                    src={LogoTask}
                    alt="rainbow logo"
                    height="50"
                    className="rainbow-m-left_medium react-rainbow-global-header_logo"
                  />
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
                  {/* <ButtonIcon
                    variant="border"
                    disabled
                    icon={<FontAwesomeIcon icon={faBell} />}
                  /> */}
                  <ButtonMenu
                    menuSize="x-small"
                    menuAlignment="right"
                    icon={<FontAwesomeIcon icon={faAngleDown} />}
                  >
                    <MenuItem label="Options" variant="header" />
                    <MenuItem label="Menu Item" />
                    <MenuItem label="Menu Item" />
                    <MenuDivider variant="space" />
                    <MenuItem
                      label="Right Icon"
                      icon={<FontAwesomeIcon icon={faTasks} />}
                      iconPosition="right"
                    />
                  </ButtonMenu>
                </ButtonGroup>
              </article>
            )}
            <div
              className={css`
                align-self: center;
              `}
            >
              {isDesktopOrLaptop && (
                <Button label="Cerrar sessión" variant="destructive" />
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
          </Header>
        </section>

        <Modal
          id="modalProjects"
          title="Agrega un nuevo proyecto"
          isOpen={isOpen}
          onRequestClose={() => setOpenStatus(false)}
          footer={
            <div className="rainbow-flex rainbow-justify_end">
              <Button
                className="rainbow-m-right_large"
                label="Cancelar"
                variant="destructive"
                onClick={() => setOpenStatus(false)}
              />
            </div>
          }
        >
          <FormModal />
        </Modal>

        {(isDesktopOrLaptop || isBigScreen) && <p>Estas en computadora</p>}
        {isTabletOrMobile && <p>Estas en un celular</p>}
      </ContainerApp>
    </ContainerProjects>
  );
};
