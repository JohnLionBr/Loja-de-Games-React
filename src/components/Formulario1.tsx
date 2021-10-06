import { useState } from "react";
import Botao from "./Botao";






export default function Formulario1(props){

    const items = [{
        id: 312,
        name: "Super Mario Odyssey",
        price: 197.88,
        score: 100,
        image: "super-mario-odyssey.png",
        quantidade: 0
      },
      {
        id: 201,
        name: "Call Of Duty Infinite Warfare",
        price: 49.99,
        score: 80,
        image: "call-of-duty-infinite-warfare.png",
        quantidade: 0

      },
      {
        id: 102,
        name: "The Witcher III Wild Hunt",
        price: 119.5,
        score: 250,
        image: "the-witcher-iii-wild-hunt.png",
        quantidade: 0

      },
      {
        id: 99,
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
        image: "call-of-duty-wwii.png",
        quantidade: 0

      },
      {
        id: 12,
        name: "Mortal Kombat XL",
        price: 69.99,
        score: 150,
        image: "mortal-kombat-xl.png",
        quantidade: 0

      },
      {
        id: 74,
        name: "Shards of Darkness",
        price: 71.94,
        score: 400,
        image: "shards-of-darkness.png",
        quantidade: 0

      },
      {
        id: 31,
        name: "Terra Média: Sombras de Mordor",
        price: 79.99,
        score: 50,
        image: "terra-media-sombras-de-mordor.png",
        quantidade: 0

      },
      {
        id: 420,
        name: "FIFA 18",
        price: 195.39,
        score: 325,
        image: "fifa-18.png",
        quantidade: 0

      },
      {
        id: 501,
        name: "Horizon Zero Dawn",
        price: 115.8,
        score: 290,
        image: "horizon-zero-dawn.png",
        quantidade: 0

      }
    ]

      function inicializarLoja() {
        
           var containerProdutos = document.getElementById('produtos');
           
        
          
          items.map((val)=>{
            
               
                 containerProdutos.innerHTML +=`
                <div className="produtos-single">
                <img src="`+val.image+`"/>
                <p>`+val.name+`</p>
                <a href="" key="`+val.id+`" href="#">Adicionar ao carrinho</a>
                </div>
                `;
           })
           
       } 

     inicializarLoja();
 
       function atualizarCarrinho(){

        var containerCarrinho = document.getElementById('carrinho');
           containerCarrinho.innerHTML = "";
          
        items.map((val)=>{
            if(val.quantidade > 0){
             containerCarrinho.innerHTML+= `
             <p>`+val.name+` | quantidade: `+val.quantidade+`</p>
             <hr>
             `;}
        })
    

       }


       var links = document.getElementsByTagName('a');
       
       for (var i = 0; i < links.length; i++ ){
           links[i].addEventListener("click",function(){
               let key = this.getAttribute('key');
               items[key].quantidade++;
               atualizarCarrinho();
               return false;
           })
       }

  

    

        
        const compra = () => {
            window.alert('Compra finalizada')
        };
        
        
    

       
    return (
        <div>
            <h2>Vitrine:

         </h2>
         <div id="produtos"></div>
          <h2>Carrinho:

         </h2>
         <div id="carrinho"></div>
        
         
        

        <div className="mt-7 flex justify-end">
            
            <Botao cor="blue" className="mr-2" onClick={compra}>
                    Finalizar
                </Botao>
                <Botao  onClick={props.cancelado}
                    cor="gray" className="">
                        Cancelar
                </Botao>
        </div>
        
       
        </div>)}


