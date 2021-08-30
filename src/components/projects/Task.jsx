import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, ButtonIcon, Card, Chip } from 'react-rainbow-components';

const ContainerTask = styled.div`
  margin-top: 10px;
`;

const TaskLabel = styled.span`
  margin: 10px;
`;

const GroupActions = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Task = ({ task }) => {
  const { name, complete } = task;

  const titleComplete = complete ? 'Completa' : 'Incompleta';

  const variantTask = complete ? 'success' : 'neutral';

  return (
    <ContainerTask>
      <Card
        // icon={
        //   <FontAwesomeIcon
        //     icon={faUsers}
        //     size="lg"
        //     className="rainbow-color_brand"
        //   />
        // }
        title={name}
        actions={
          <GroupActions>
            <Chip
              className={css`
                margin-right: 15px;
              `}
              label={
                <>
                  <TaskLabel
                  // onClick={handleTaskCheck}
                  >
                    {titleComplete}
                  </TaskLabel>
                </>
              }
              variant={variantTask}
            />
            <ButtonGroup>
              <ButtonIcon
                variant="outline-brand"
                icon={<FontAwesomeIcon icon={faPencilAlt} />}
              />
              <ButtonIcon
                variant="destructive"
                icon={<FontAwesomeIcon icon={faTrashAlt} />}
              />
            </ButtonGroup>
          </GroupActions>
        }
      />
    </ContainerTask>
  );
};
