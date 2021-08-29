import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SideBar } from '../layout/SideBar';
import styled from '@emotion/styled';
import { Button, Modal } from 'react-rainbow-components';
import { FormModal } from './FormModal';

const ContainerProjects = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContainerApp = styled.div`
  background-color: #fafaf9;
  width: 100%;
`;

export const ProjectsView = () => {
  const [isOpen, setOpenStatus] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  });

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });

  return (
    <ContainerProjects>
      <SideBar setOpenModal={setOpenStatus} />
      <ContainerApp>
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

        {isDesktopOrLaptop && <p>Estas en computadora</p>}
        {isTabletOrMobile && <p>Estas en un celular</p>}
      </ContainerApp>
    </ContainerProjects>
  );
};
