import React, { useContext, useState } from 'react';





export default function Nav(props){

    let OrderList = [{
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

  
    let newProducts = [...OrderList]

    async function alphaOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
           
      }

      async function scoreOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.score > b.score) { return -1; }
            if(a.score < b.score) { return 1; }
            return 0;
        })
           
            
      }

      async function priceOrder() {
        OrderList = await newProducts.sort(function(a, b){
            if(a.price < b.price) { return -1; }
            if(a.price > b.price) { return 1; }
            return 0;
        })
           
            
      }

     

   

   


    

    return (
        <div className='form_container'>
            <p className='infoFrete'>*Frete gratis em compras acima de R$ 250,00</p>
            <div className='nav_content'>
                <p className='nav_info'>Ordernar: </p>

                <div className='nav'>
                    <div className='nav_container'>
            
                        
            
                        <ul>
                            <li className='nav_item' onClick={alphaOrder} >Ordem Alfabética</li>
                            <li className='nav_item' onClick={scoreOrder} >Avaliações(Score)</li>
                            <li className='nav_item' onClick={priceOrder}>Preço</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}