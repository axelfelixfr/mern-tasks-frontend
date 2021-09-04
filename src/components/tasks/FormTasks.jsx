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
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        'Must be only letters'
      )
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const ProjectsContext = useContext(ProjectContext);
  const { selectProject } = ProjectsContext;

  const [actualProject] = selectProject;

  // Context de tareas
  const ListTasksContext = useContext(TasksContext);
  const { addNewTask, getTasksFromProyect } = ListTasksContext;

  const handleAddTask = (data, e) => {
    data.projectId = actualProject.id;
    data.complete = false;
    addNewTask(data);
    getTasksFromProyect(data.projectId);
    e.target.reset(); // reset after form submit
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
          icon={<FontAwesomeIcon icon={faTasks} />}
        />

        <ContainerButton>
          <Button label="Enviar tarea" type="submit" variant="brand" />
        </ContainerButton>
      </form>
    </ContainerFormTasks>
  );
};
