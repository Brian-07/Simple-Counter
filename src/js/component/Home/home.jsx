import React from "react";

import Card from "../Card/card.jsx";
import "../Home/home.css";


//create your first component
const Home = (props) => {
	const digitos = [0, 0, 0, 0, 0, 0];

	 const forma1 = () => {
	 	let segundos = props.second

	 	for (let index=0; segundos > 0 ; index++) {
	 		const digito = segundos % 10
	 		digitos[index] = digito
	 		segundos = Math.floor(segundos / 10)
			console.log(digito);
	 	}
	 	digitos.reverse()
	 }
	 forma1()

	return (
		<div className="container align-item-center mx-2 mt-5">
			<div className="container d-flex mx-2 justify-content-center mt-5">	
				<div id="divReloj" className=" card mb-3 mx-2 justify-content-center align-item-end d-flex align-items-center " style = {{width: "3rem"}}>
					<i className="far fa-clock"></i>
				</div>
				{ digitos.map((digito) => <Card second={digito} />) }
			
			</div>
			
			<div className="btn-group container w-50 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
  				<button type="buttonStop" onClick={props.onRestart} className="btn btn-danger"><i class="fas fa-stop-circle"></i></button>
  					<button type="buttonPause" onClick={props.onPause} className="btn btn-warning"><i class="fas fa-pause-circle"></i></button>
  						<button type="buttonPlay" onClick={props.onPlay} className="btn btn-success"><i class="far fa-play-circle"></i></button>
			</div>
			<div className="card container d-flex flex-row mt-2 w-50 h-25 "style={{backgroundColor: "gray"}}>
				<label for="numerosSeg" className="fw-semibold fst-italic  ">Coloque su alarma en segundos: </label>
					<input type="number"  className="mx-1 border border-primary  text-center fs-3" id="numerosSeg" min={1} max={999999}/>
						<button type="button" className="btn btn-dark mx-5 mt-1 btn-lg" onClick={props.tomarSeg}><i class="fas fa-stopwatch"></i></button>
			</div>
			<div className="card container d-flex flex-row mt-2 w-50 h-25 "style={{backgroundColor: "gray"}}>
				<label for="numeroAlarma" className="fw-semibold fst-italic">Coloque su cuenta regresiva en segundos: </label>
					<input type="number"  className=" mx-auto border border-primary  text-center fs-3" id="numeroAlarma" min={0} max={999999}/>
						<button type="button" className="btn btn-dark mx-5 mt-1 btn-lg" onClick={props.tomarAlarma}><i class="fas fa-history"></i></button>
			</div>

		</div>
		
	);

};

export default Home;
