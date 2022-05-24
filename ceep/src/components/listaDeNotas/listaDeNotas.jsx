import React from "react";
import { Component } from "react";
import { CardNota } from "../cardNota/CardNota";

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => {
                    return (
                        <li key={index}>
                            <CardNota></CardNota>
                        </li>
                    )
                })}
            </ul>
        )
    }
}