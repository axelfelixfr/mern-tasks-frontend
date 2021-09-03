import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, ButtonIcon, Card, Chip } from 'react-rainbow-components';
import { TasksContext } from '../../context/TasksContext';
import { ProjectContext } from '../../context/ProjectContext';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Estas seguro(a) de eliminar esta tarea?',
      showDenyButton: true,
      confirmButtonColor: '#00A3DC',
      showCloseButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `Cancelar`,
      icon: 'question',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteTask(idTask);
        getTasksFromProyect(actualProject.id);
        Swal.fire({
          title: '¡Tarea eliminada!',
          confirmButtonColor: '#00A3DC',
          showCloseButton: true,
          confirmButtonText: `Ok`,
          icon: 'success'
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Acción cancelada',
          confirmButtonColor: '#00A3DC',
          showCloseButton: true,
          confirmButtonText: `Ok`,
          icon: 'info'
        });
      }
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
