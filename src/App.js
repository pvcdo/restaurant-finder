import React from 'react';
import {Provider} from 'react-redux';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components'; // encapsula o documento principal de temas para usarmos em todas as renderizações da nossa aplicação.

import store from './redux/store';
import theme from './theme';
import Home from './pages/Home'; //quando não passamos qual arquivo deve ser encontrado dentro da pasta, o program porcura por padrão o que tenha o nome de index.

function App(){
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;