// exportar um módulo
const nome_do_modulo = { };
export { nome_do_modulo };

const PI = Math.PI;
const soma = (a,b) => { 
  return a + b;
};
export { soma, PI };

// exportar um módulo padrão
export default nome_do_modulo;

const App = () => { };
export default App;

 // importar um módulo
import { nome_do_modulo } from nome_do_arquivo;

import { soma, PI } from './modulos.js';

// importar um módulo padrão
import nome_do_modulo from nome_do_arquivo;

import App from './modulos.js';
