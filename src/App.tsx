import React from 'react';

import GlobalStyle from './pages/styles/global';
import { AuthProvider } from './context/AuthContex';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
    <GlobalStyle />
  </Router>
);

export default App;