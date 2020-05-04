import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './Tabela';

const autores = [
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
];


function App() {
  return (
    <div className="App">
      <Tabela autores={autores} />
    </div>
  );
}

export default App;
