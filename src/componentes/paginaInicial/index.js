import React, {useState} from 'react'
import './style.css'

export default function PaginaInicial(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(10)
    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1)
        setNumeroAleatorio(novoNumero)
    }

    return(
        <div className="container">
            <h1>Número aleatório</h1>
            <h2>{numeroAleatorio}</h2>
            <div className="area-botao">
                <label>
                    Clique no botão abaixo para gerar um novo número
                </label>
                <button onClick={gerarNumero}>Gerar</button>
            </div>

        </div>
    )
}