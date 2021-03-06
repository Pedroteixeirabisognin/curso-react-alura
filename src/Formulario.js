import React, { Component } from 'react';

class Formulario extends Component {


    constructor(props) {

        //Aqui ele está chamando o props de Component
        super(props);
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        //Aqui ele está colocando state inicial em state
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        //Aqui ele está recebendo um event 
        const { name, value } = event.target;
        //Aqui ele está usando aquele método setState para mudar o valor de uma das variáveis que estão dentro do state
        this.setState({
            [name]: value
        });
    }

    //Assim que é pressionado o buton o método onclick vai executar submitFormulario
    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        //Aqui ele está pegando os valores de dentro de state desmembrando o array
        const { nome, livro, preco } = this.state;

        return (<form>
            <div className="row">

                <div className="input-field col s4">
                    <label className="input-field" htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        //Aqui ele está capturando os valores nas variáveis desmembradas
                        value={nome}
                        //Aqui ele está colocando um onchange para a cada mudança ele 
                        onChange={this.escutadorDeInput}

                    />
                </div>
                <div className="input-field col s4">
                    <label className="input-field" htmlFor="livro">Livro</label>

                    <input
                        id="livro"
                        type="text"
                        name="livro"
                        value={livro}
                        onChange={this.escutadorDeInput}

                    />
                </div>

                <div className="input-field col s4">
                    <label className="input-field" htmlFor="preco">Preço</label>
                    <input
                        id="preco"
                        type="text"
                        name="preco"
                        value={preco}
                        onChange={this.escutadorDeInput}
                    />
                </div>

                <button onClick={this.submitFormulario} className="waves-effect waves-light indigo lighten-2 btn" type="button">Salvar
            </button>
            </div>
        </form>);

    }

}

export default Formulario;