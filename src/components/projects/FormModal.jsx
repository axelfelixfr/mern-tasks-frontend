import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { ProjectContext } from '../../context/ProjectContext';

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
  const ProjectsContext = useContext(ProjectContext);
  const { newProject, openModalProject } = ProjectsContext;

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4)
      .max(15)
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

  const handleProject = data => {
    newProject(data);
    openModalProject(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleProject)}>
        <ContainerForm>
          <Input
            id="input-project"
            name="name"
            {...register('name')}
            label="Proyecto"
            error={errors.name?.message}
            placeholder="El nombre de tu proyecto"
            autoComplete="off"
            type="text"
            style={inputStyles}
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
          />
        </ContainerForm>

        <ContainerButton>
          <Button shaded label="Crear proyecto" type="submit" variant="brand" />
        </ContainerButton>
      </form>
    </>
  );
};
