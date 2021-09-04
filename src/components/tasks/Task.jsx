import React, { useContext } from 'react';
import AlertSwal from '../utilities/AlertSwal';
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
  const { deleteTask, getTasksFromProyect, changeStateTask, editTask } =
    ListTasksContext;

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
        // Le enviamos lo que queremos si confirmo la eliminación
        deleteTask(idTask); // Eliminamos la tarea
        getTasksFromProyect(actualProject.id); // Obtenemos las tareas del proyecto para refrescar las tareas
      },
      titleSuccess: '¡Tarea eliminada!',
      iconSuccess: 'success',
      titleCancel: 'Acción cancelada',
      iconCancel: 'info'
    });
  };

  // Función para modificar el state de las tareas (completa/incompleta)
  const handleChangeTask = task => {
    // Hacemos la negación del state de la tarea, para que pase de true a false y viceversa
    task.complete = !task.complete;
    changeStateTask(task);
  };

  const handleEditTask = async task => {
    // Algoritmo para aceptar sólo letras con acentos y ñ
    const regex =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    const { value: title } = await Swal.fire({
      title: 'Editar tarea',
      showCloseButton: true,
      input: 'text',
      inputLabel: 'Tarea',
      inputPlaceholder: task.name,
      showCancelButton: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#01B6F5',
      confirmButtonText: 'Guardar',
      cancelButtonColor: '#FE4849',
      inputValidator: value => {
        return new Promise((resolve, reject) => {
          if (
            value === '' ||
            value.length < 4 ||
            !regex.test(value) ||
            value.length > 30
          ) {
          } else {
            // Si pasa la validación, entonces editamos la tarea
            task.name = value; // Tomamos el value para colocarlo en la propiedad 'name'
            editTask(task); // Editamos la tarea
            // Resolvemos la promesa
            resolve();
          }
        });
      }
    });

    if (title) {
      Swal.fire({
        title: `Actualización de tarea: ${title}`,
        confirmButtonColor: '#01B6F5',
        showCloseButton: true,
        confirmButtonText: 'Ok',
        icon: 'success'
      });
    }
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
                  <TaskLabel onClick={() => handleChangeTask(task)}>
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
                onClick={() => handleEditTask(task)}
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
