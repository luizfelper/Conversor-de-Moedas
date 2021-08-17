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
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let qtd_dias = `1`; //Quantidade de dias a ser mostrado.
        let url = `https://economia.awesomeapi.com.br/json/daily/${de_para}/${qtd_dias}`;


        fetch(url)
        .then(function (resposta) {
            resposta.json()
            .then(function (data) {
                console.log(data);
                //let moedaB_valor = (this.state.moedaA_valor * this.state.moedaB_val);
            })
        })

        /* 
        fetch(url)
        .then(res=>{
            return res.json()
            console.log(res.json)
        })
        .then(json=>{
            let cotacao = json[de_para].value;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
            this.setState({moedaB_valor})
        }) */
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text"
                    placeholder="Digite um valor"
                    onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}>
                </input>
                    <button
                    className="btnConverter"
                    value="Converter"
                    onClick={this.converter}>
                        Converter
                    </button>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }

}