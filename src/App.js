import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './Tabela';

import Form from './Formulario';


class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  }

  removeAutor = index  =>{
    const { autores } = this.state;

    this.setState( 
        {

          
            autores : autores.filter((autor, posAtual) => {
                    return posAtual !== index;
            }),
        }
    );
  }

  //Metodo que adiciona um novo autor ao array de autores dentro do state
  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor]})
  }

  //Envio o método escutadorDeSubmit para o form
  render() {
    return (
      <Fragment>
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
        <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
      </Fragment>
    );
  }

}
export default App;
