import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import { Button, Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const ContainerButton = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
`;

const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const LoginView = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(32)
      .required()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'The password must be at least 8 letters long and include at least one capital letter and one number'
      )
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleLogin = data => {
    const { email, password } = data;
    console.log(email, password);
  };

  const inputStyles = {
    width: 350,
    marginTop: 15
  };

  return (
    <>
      <form
        className="animate__animated animate__fadeIn"
        onSubmit={handleSubmit(handleLogin)}
      >
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
          label="Password"
          error={errors.password?.message}
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
            label="Entrar"
            type="submit"
            variant="brand"
            className="rainbow-m-around_medium"
          />
        </ContainerButton>
        <ContainerButton>
          <Button variant="neutral" className="rainbow-m-around_medium">
            <LinkDecoration to="/new-account">
              ¿Eres nuevo(a)? Registrate ahora
            </LinkDecoration>
          </Button>
        </ContainerButton>
      </form>
    </>
  );
};
