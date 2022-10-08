
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import Home from "./component/Home/home.jsx";
import card from "./component/Card/card.jsx";


let second = 0;
const Max = 999999;

let paused = false
let valor = 0;
let valorAlarma = 0;


const onPause = () => {
    paused = true
};

const onPlay = () => {
    paused = false
};

const onRestart = () => {
    second = 0;
};
const tomarSeg = () => {
    valor = document.getElementById("numerosSeg").value;
    return valor;
     
}; 
const tomarAlarma = () => {
    valorAlarma = document.getElementById("numeroAlarma").value;
    return clearInterval(valorAlarma);
     
}; 

const render = () => {
    ReactDOM.render(<Home second={second} onPause={onPause}  onPlay={onPlay} onRestart={onRestart} tomarSeg={tomarSeg} tomarAlarma={tomarAlarma}/>, document.querySelector("#app"));
    if (!paused) {
        if (second >= Max){
            second = 0;
         }
        else if(valorAlarma>0){
            second = valorAlarma;
            valorAlarma--;
                if(valorAlarma == 0){
                    alert("Tu tiempo llego a 0... (O__O)")
                };
            }else{
                second += 1;
                if(second == valor){
                    console.log(valor);
                    alert("Tu tiempo se ha terminado!");
                };
                };
        };
    
};

setInterval(render,1000);

