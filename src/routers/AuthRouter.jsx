import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { LoginView } from '../components/auth/LoginView';
import { NewAccountView } from '../components/auth/NewAccountView';
import { Card } from 'react-rainbow-components';
import styled from '@emotion/styled';
import LogoTask from '../assets/task.svg';

const ContainerForm = styled.div`
  background-color: #fafaf9;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  padding: 2rem;
  max-width: 500px;
  width: auto;
`;

const ContainerLogo = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;

// const ContainerButton = styled.div`
//   margin: 0 auto;
//   text-align: center;
//   padding-top: 1rem;
// `;

// const LinkDecoration = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

export const AuthRouter = () => {
  let { pathname } = useLocation();

  let titleForm = pathname === '/login' ? 'Iniciar sesión' : 'Registro';

  return (
    <ContainerForm>
      <Card>
        <Form>
          <ContainerLogo>
            <img src={LogoTask} alt="Logo Task" width="80" />
            <Title>{titleForm}</Title>
          </ContainerLogo>
          <Switch>
            <Route exact path="/login" component={LoginView} />

            <Route exact path="/new-account" component={NewAccountView} />

            <Redirect to="/login" />
          </Switch>
        </Form>
      </Card>
    </ContainerForm>
  );
};
