import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Home from './pages/Home'; //quando não passamos qual arquivo deve ser encontrado dentro da pasta, o program porcura por padrão o que tenha o nome de index.

function App(){
  return(
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;