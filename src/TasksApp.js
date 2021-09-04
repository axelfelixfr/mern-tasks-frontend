import React from 'react';
import ProjectProvider from './context/ProjectContext';
import TasksProvider from './context/TasksContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <ProjectProvider>
      <TasksProvider>
        <AppRouter />
      </TasksProvider>
    </ProjectProvider>
  );
}

export default App;
