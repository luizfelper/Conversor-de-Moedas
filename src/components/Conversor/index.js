import React, { Component } from 'react';

export default class Conversor extends Component {
    render() {
        return (
            <div className="conversor">
                <h2>USD para BRL</h2>
                <input type="text" placeholder="Digite um valor"></input>
                <button
                className="btnConverter"
                value="Converter">
                    Converter
                </button>
                <h2>Valor convertido</h2>
            </div>
        )
    }

}