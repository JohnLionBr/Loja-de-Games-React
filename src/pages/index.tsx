import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";

import { useState } from "react";
import { IconeCarrinho } from "../components/icones";
import Formulario1 from "../components/Formulario1";

export default function Home() {
  const [setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')



  const clientes = [
    {
      "id": 312,
      "name": "Super Mario Odyssey",
      "price": 197.88,
      "score": 100,
      "image": "super-mario-odyssey.png"
    },
    {
      "id": 201,
      "name": "Call Of Duty Infinite Warfare",
      "price": 49.99,
      "score": 80,
      "image": "call-of-duty-infinite-warfare.png"
    },
    {
      "id": 102,
      "name": "The Witcher III Wild Hunt",
      "price": 119.5,
      "score": 250,
      "image": "the-witcher-iii-wild-hunt.png"
    },
    {
      "id": 99,
      "name": "Call Of Duty WWII",
      "price": 249.99,
      "score": 205,
      "image": "call-of-duty-wwii.png"
    },
    {
      "id": 12,
      "name": "Mortal Kombat XL",
      "price": 69.99,
      "score": 150,
      "image": "mortal-kombat-xl.png"
    },
    {
      "id": 74,
      "name": "Shards of Darkness",
      "price": 71.94,
      "score": 400,
      "image": "shards-of-darkness.png"
    },
    {
      "id": 31,
      "name": "Terra Média: Sombras de Mordor",
      "price": 79.99,
      "score": 50,
      "image": "terra-media-sombras-de-mordor.png"
    },
    {
      "id": 420,
      "name": "FIFA 18",
      "price": 195.39,
      "score": 325,
      "image": "fifa-18.png"
    },
    {
      "id": 501,
      "name": "Horizon Zero Dawn",
      "price": 115.8,
      "score": 290,
      "image": "horizon-zero-dawn.png"
    }
  ]

  function clienteSelecionado(_cliente: Cliente){
    
    setVisivel('form')
    


  }

  function clienteExcluido(_cliente: Cliente){


  }

    function novoCliente() {
      
      setVisivel('form')
    }
  
  function salvarCLiente(_cliente: Cliente){
    setVisivel('tabela')

  }




  return (
    <div  className={`
    flex justify-center items-center
    bg-gradient-to-r from-gray-900 to-blue-900
    text-white
    `}>
     <Layout titulo="Loja de Jogos">
       {visivel === 'tabela' ? (
        <>
       <div className="flex justify-end">
         <Botao cor="green" 
         onClick={novoCliente}
         className="mb-4 text-3xl">
           {IconeCarrinho}
          </Botao>
       </div>
       <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         
         />

       </>

       ) :(
     
       <Formulario1
       cancelado={() => setVisivel('tabela')
      }
       /> 
       )}
     </Layout>
    </div>
  )
}
