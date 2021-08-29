import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const ContainerButton = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
`;

const ContainerForm = styled.div`
  display: flex;
  place-content: center;
  padding-top: 0;
`;

const inputStyles = {
  width: 350,
  marginTop: 15
};

export const FormModal = () => {
  const schema = yup.object().shape({
    project: yup
      .string()
      .min(4)
      .max(15)
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

  const handleProject = data => {
    const { project } = data;
    console.log(project);
  };

  return (
    <>
      <form
        className="rainbow-align-content_center"
        onSubmit={handleSubmit(handleProject)}
      >
        <ContainerForm>
          <Input
            id="input-project"
            name="project"
            {...register('project')}
            label="Proyecto"
            error={errors.project?.message}
            placeholder="El nombre de tu proyecto"
            autoComplete="off"
            type="text"
            style={inputStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            icon={
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="rainbow-color_gray-3"
              />
            }
          />
        </ContainerForm>

        <ContainerButton>
          <Button
            shaded
            label="Crear proyecto"
            type="submit"
            variant="brand"
            className="rainbow-m-around_medium"
          />
        </ContainerButton>
      </form>
    </>
  );
};