import { Component } from 'react';
import './App.css';
import { FormularioCadastro } from './components/formularioCadastro';
import { ListaDeNotas } from './components/listaDeNotas/listaDeNotas.jsx';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    )
  }
}

export default App;
