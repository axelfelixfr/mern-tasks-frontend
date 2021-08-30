import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { Breakpoints } from './Breakpoints';
import LogoTask from '../../assets/task.svg';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonMenu,
  MenuDivider,
  MenuItem
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faPlus,
  faSignOutAlt,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import { ProjectContext } from '../../context/ProjectContext';

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
  const { openModalProject } = ProjectsContext;

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
            <Button label="Cerrar sesión" variant="destructive" />
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
