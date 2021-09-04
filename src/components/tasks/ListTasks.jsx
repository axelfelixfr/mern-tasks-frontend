import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Task } from './Task';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectContext } from '../../context/ProjectContext';
import { TasksContext } from '../../context/TasksContext';
import AlertSwal from '../utilities/AlertSwal';
import './transition.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContainerList = styled.div`
  margin: 30px;
`;

const TitleTasks = styled.h2`
  text-align: center;
`;

const NotFound = styled.h4`
  text-align: center;
`;

const DeleteButton = styled.div`
  margin-top: 10px;
`;

export const ListTasks = () => {
  // const [taskCheck, setTaskCheck] = useState(false);

  // const variantTask = taskCheck ? 'success' : 'neutral';

  // const handleTaskCheck = () => {
  //   if (taskCheck) {
  //     setTaskCheck(false);
  //   } else {
  //     setTaskCheck(true);
  //   }
  //   console.log('Se hizo click');
  // };
  // const style = { width: '250px' };

  const ProjectsContext = useContext(ProjectContext);
  const { selectProject, deleteProject } = ProjectsContext;

  // Context de tareas
  const ListTasksContext = useContext(TasksContext);
  const { tasksForProject } = ListTasksContext;

  if (!selectProject) {
    return <TitleTasks>Selecciona un proyecto o crea uno</TitleTasks>;
  }

  const [actualProject] = selectProject;

  // const tasks = [];

  const handleDeleteProject = () => {
    AlertSwal({
      title: '¿Estas seguro(a) de eliminar este proyecto?',
      iconInitial: 'question',
      confirmButton: 'Eliminar',
      cancelButton: 'Cancelar',
      functionSuccess: () => {
        deleteProject(actualProject.id);
      },
      titleSuccess: '¡Proyecto eliminado!',
      iconSuccess: 'success',
      titleCancel: 'Acción cancelada',
      iconCancel: 'info'
    });
  };

  return (
    <ContainerList>
      <TitleTasks>Proyecto: {actualProject.name}</TitleTasks>

      {!tasksForProject.length ? (
        <NotFound>No hay tareas</NotFound>
      ) : (
        <TransitionGroup>
          {tasksForProject.map(task => (
            <CSSTransition key={task.id} timeout={500} classNames="item">
              <Task task={task} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      {/* tasksForProject.map(task => (
          <Task
            className="animate__animated animate__fadeInDown"
            task={task}
            key={task.id}
          />
        )) */}

      <DeleteButton>
        <ButtonIcon
          shaded
          variant="destructive"
          onClick={handleDeleteProject}
          size="large"
          tooltip="Borrar proyecto"
          icon={<FontAwesomeIcon icon={faTrashAlt} />}
        />
      </DeleteButton>

      {/* <Chip
        className="rainbow-m-around_medium"
        label={
          <>
            <HelpText
              title="Message Title"
              text={
                <p style={style}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              }
            />
            <TaskLabel onClick={handleTaskCheck}>Tarea sobre diseño</TaskLabel>
          </>
        }
        variant={variantTask}
        onDelete={() => alert('Delete Chip!')}
      /> */}
    </ContainerList>
  );
};
