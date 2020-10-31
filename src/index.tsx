import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Books';

/**
 * É aqui que a mágica acontece. É onde o nosso sistema é renderizado no browser. O primeiro parâmetro recebe nosso componente principal de renderização, e o segundo parâmetro é o elemento qem que queremos renderizar. Note que o segundo parâmetro receber um elemento da DOM que possui o `id` root. Ele será renderizado dentro da página html principal do sistema, que fica em public/index.html
 */
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
