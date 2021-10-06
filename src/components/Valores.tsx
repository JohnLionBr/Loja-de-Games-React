import React from "react";
import Formulario from "./Formulario";
import todoList from Formulario

export default function Valores(props) {
    
    var arr= [1,2,3,4,5,6];
    var soma = 0

    for(var i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    

    return(
        <h1>{soma}</h1>
    )
}