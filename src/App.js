import React from 'react';
import Home from './containers/Home';
import { Reset } from 'styled-reset';
import GlobalStyles from './global';
import GithubProvider from './providers/github';

function App() {
  return (
    <main>
      <Reset />
      <GlobalStyles />

       <GithubProvider>
          <Home/>
       </GithubProvider>     
    </main>
  )
}

export default App
