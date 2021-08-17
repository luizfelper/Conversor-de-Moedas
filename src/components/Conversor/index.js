import React, { Component } from 'react';

export default class Conversor extends Component {


    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }
            this.converter = this.converter.bind(this);
    }

    converter(){
       fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/1')
       .then(function (response) {
           return response.json();
       })
       .then(function(data){
           console.log(data[0].high);
           let cotacao = data[0].high;
           let moedaB_valor = this.state.moedaA_valor * cotacao;
           this.setState({moedaB_valor});
       })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text"
                    placeholder="Digite um valor em Euro"
                    onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}>
                </input>
                    <button
                    type="button" onClick={this.converter}>
                        Converter
                    </button>
                <h2>{this.state.moedaB_valor} Reais</h2>
            </div>
        )
    }

}