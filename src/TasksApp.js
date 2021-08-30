import React from 'react';
import ProjectProvider from './context/ProjectContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <ProjectProvider>
      <AppRouter />
    </ProjectProvider>
  );
}

export default App;
