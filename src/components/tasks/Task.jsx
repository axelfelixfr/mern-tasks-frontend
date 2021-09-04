import React, { useContext } from 'react';
import AlertSwal from '../utilities/AlertSwal';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, ButtonIcon, Card, Chip } from 'react-rainbow-components';
import { TasksContext } from '../../context/TasksContext';
import { ProjectContext } from '../../context/ProjectContext';

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
  const ProjectsContext = useContext(ProjectContext);
  const { selectProject } = ProjectsContext;

  // Context de tareas
  const ListTasksContext = useContext(TasksContext);
  const { deleteTask, getTasksFromProyect } = ListTasksContext;

  const { id, name, complete } = task;

  const titleComplete = complete ? 'Completa' : 'Incompleta';

  const variantTask = complete ? 'success' : 'neutral';

  const [actualProject] = selectProject;

  const handleDeleteTask = idTask => {
    AlertSwal({
      title: '¿Estas seguro(a) de eliminar esta tarea?',
      iconInitial: 'question',
      confirmButton: 'Eliminar',
      cancelButton: 'Cancelar',
      functionSuccess: () => {
        deleteTask(idTask);
        getTasksFromProyect(actualProject.id);
      },
      titleSuccess: '¡Tarea eliminada!',
      iconSuccess: 'success',
      titleCancel: 'Acción cancelada',
      iconCancel: 'info'
    });
  };

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
                onClick={() => handleDeleteTask(id)}
              />
            </ButtonGroup>
          </GroupActions>
        }
      />
    </ContainerTask>
  );
};
