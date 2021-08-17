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
        console.log(this.state);
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
                <h2>Valor convertido</h2>
            </div>
        )
    }

}