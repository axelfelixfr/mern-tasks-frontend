import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

const ContainerButton = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
`;

const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NewAccountView = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4)
      .max(30)
      .required()
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        'Must be only letters'
      ),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(32)
      .required()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'The password must be at least 8 letters long and include at least one capital letter and one number'
      ),
    password2: yup
      .string()
      .oneOf([yup.ref('password'), null], "passwords don't match!")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleRegister = data => {
    const { name, email, password, password2 } = data;
    console.log(name, email, password, password2);
  };

  const inputStyles = {
    width: 350,
    marginTop: 15
  };

  return (
    <>
      <form
        className="animate__animated animate__fadeIn"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Input
          id="input-name"
          name="name"
          {...register('name')}
          label="Nombre"
          error={errors.name?.message}
          placeholder="Tu nombre"
          autoComplete="off"
          type="text"
          style={inputStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          icon={
            <FontAwesomeIcon icon={faUser} className="rainbow-color_gray-3" />
          }
        />

        <Input
          id="input-email"
          name="email"
          {...register('email')}
          label="Correo electrónico"
          error={errors.email?.message}
          placeholder="Tu correo"
          autoComplete="off"
          type="email"
          style={inputStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          icon={
            <FontAwesomeIcon
              icon={faEnvelope}
              className="rainbow-color_gray-3"
            />
          }
        />

        <Input
          id="input-password"
          name="password"
          {...register('password')}
          label="Contraseña"
          error={errors.password?.message}
          placeholder="************"
          type="password"
          style={inputStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          icon={
            <FontAwesomeIcon icon={faKey} className="rainbow-color_gray-3" />
          }
        />

        <Input
          id="input-password2"
          name="password2"
          {...register('password2')}
          label="Confirmar contraseña"
          error={errors.password2?.message}
          placeholder="************"
          type="password"
          style={inputStyles}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          icon={
            <FontAwesomeIcon icon={faKey} className="rainbow-color_gray-3" />
          }
        />

        <ContainerButton>
          <Button
            shaded
            label="Registrarme"
            type="submit"
            variant="brand"
            className="rainbow-m-around_medium"
          />
        </ContainerButton>
        <ContainerButton>
          <Button variant="neutral" className="rainbow-m-around_medium">
            <LinkDecoration to="/login">
              ¿Ya te registraste? Inicia sesión aquí
            </LinkDecoration>
          </Button>
        </ContainerButton>
      </form>
    </>
  );
};
