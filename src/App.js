import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components'; // encapsula o documento principal de temas para usarmos em todas as renderizações da nossa aplicação.

import theme from './theme';
import Home from './pages/Home'; //quando não passamos qual arquivo deve ser encontrado dentro da pasta, o program porcura por padrão o que tenha o nome de index.

function App(){
  return(
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;