
import "./App.css"
import React from "react";

import ListaAlunos from './componentes/repeticao/ListaAlunos'
import Primeiro from './componentes/basico/Primeiro'
import ComParametro from './componentes/basico/ComParametro'
import Aleatorio from "./componentes/basico/Aleatorio";
import Familia from "./componentes/basico/Familia";
import FamiliaMembro from "./componentes/basico/FamiliaMembro";
import Card from "./componentes/layout/Card";


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards" color="#FF4C65">
            <Card titulo= "Lista">
                <ListaAlunos>

                </ListaAlunos>
            </Card>
        </div>

        <div className="Cards">
            <Card titulo="Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="mike" sobrenome="marciano" />
                </Familia>
            </Card>

            <Card titulo="Exemplo de Card" color="#080">
                <Aleatorio max={100} min={1} />
            </Card>

            <Card titulo="Primeiro Exercicio" color="E94C6F">
                <Primeiro></Primeiro>
            </Card>

            <Card>
                <ComParametro
                    titulo="Provas"
                    aluno="Mike"
                    nota={9} >
                </ComParametro>Ò
            </Card>
        </div>

    </div>
)




