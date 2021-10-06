import Cliente from "../core/Cliente";
import { IconeAdicionar, IconeCarrinho, IconeRemover,} from "./icones";

import { useState } from "react";



export default function Tabela(props){

    const exibirAcoes = props.clienteSelecionado
    


    function renderizarCabecalho() {
        return(
             <tr>
                <th className="text-left p-4">Id</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Preço</th>
                <th className="text-left p-4">Score</th>
                <th className="text-left p-4">Jogo</th>
                <th className=" p-4"></th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700' }`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4 cursor-pointer">{cliente.name}</td>
                    <td className="text-left p-4">{cliente.price}</td>
                    <td className="text-left p-4">{cliente.score}</td>
                    <td className="text-left p-4">
                    <img src={`/assets/${cliente.image}`} className="cursor-pointer w-2/3 rounded-2xl" alt="Jogo"/>
                    </td>
                    {exibirAcoes ? renderizarAcoes(cliente) :  false}
                </tr>
            )
        })
    
    }

    function renderizarAcoes(cliente: Cliente) {
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center
                text-green-600 rounded-full hover:bg-purple-200
                p-2 m-1 
                `}>
                    Disponível no estoque: {IconeCarrinho}
                </button>
            ) : false}
               
               
            </td>
        )
    }

    return (
        <table className={`
        w-full rounded-xl overflow-hidden`}>
            <thead className={` 
            text-gray-100
            bg-gray-500 border-black border-2`}>
              {renderizarCabecalho()}  
            </thead>
           <tbody>
               {renderizarDados()}
           </tbody>
        </table>
    )
}