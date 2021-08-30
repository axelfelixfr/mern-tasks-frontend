import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

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
    task: yup
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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleTask = data => {
    const { task } = data;
    console.log(task);
  };

  const inputStyles = {
    width: 350,
    marginTop: 15
  };

  return (
    <ContainerFormTasks>
      <form onSubmit={handleSubmit(handleTask)}>
        <Input
          id="input-task"
          name="task"
          {...register('task')}
          label="Tarea"
          error={errors.task?.message}
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
