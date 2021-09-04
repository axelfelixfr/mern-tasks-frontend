import React from 'react';
import { Application } from 'react-rainbow-components';
import ProjectProvider from './context/ProjectContext';
import TasksProvider from './context/TasksContext';
import { AppRouter } from './routers/AppRouter';

const theme = {
  rainbow: {
    palette: {
      brand: '#0091EA',
      success: '#43A047',
      error: '#F44336',
      warning: '#FFB300'
    }
  }
};

function App() {
  return (
    <ProjectProvider>
      <TasksProvider>
        <Application theme={theme}>
          <AppRouter />
        </Application>
      </TasksProvider>
    </ProjectProvider>
  );
}

export default App;
