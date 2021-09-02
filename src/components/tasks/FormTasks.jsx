import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { TasksContext } from '../../context/TasksContext';
import { ProjectContext } from '../../context/ProjectContext';

const ContainerFormTasks = styled.div`
  display: flex;
  background-color: #fafaf9;
  justify-content: center;
  width: 100%;
`;

const ContainerButton = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 1rem 0;
`;

export const FormTasks = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4)
      .max(30)
      .required()
      .matches(
        /^[a-zA-Z\s\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA]{3,}$/,
        'Must be only letters'
      )
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const ProjectsContext = useContext(ProjectContext);
  const { selectProject } = ProjectsContext;

  const [actualProject] = selectProject;

  // Context de tareas
  const ListTasksContext = useContext(TasksContext);
  const { addNewTask, getTasksFromProyect } = ListTasksContext;

  const handleAddTask = data => {
    data.projectId = actualProject.id;
    data.complete = false;
    addNewTask(data);
    getTasksFromProyect(data.projectId);
    reset();
  };

  const inputStyles = {
    width: 350,
    marginTop: 15
  };

  return (
    <ContainerFormTasks>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <Input
          id="input-task"
          name="name"
          {...register('name')}
          label="Tarea"
          error={errors.name?.message}
          placeholder="Tarea para el proyecto"
          autoComplete="off"
          type="text"
          style={inputStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          icon={
            <FontAwesomeIcon icon={faTasks} className="rainbow-color_gray-3" />
          }
        />

        <ContainerButton>
          <Button
            label="Enviar tarea"
            type="submit"
            variant="brand"
            className="rainbow-m-around_medium"
          />
        </ContainerButton>
      </form>
    </ContainerFormTasks>
  );
};
