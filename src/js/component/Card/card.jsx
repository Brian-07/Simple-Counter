import React from "react";


const Card = (props) => {
	return (
		<div>
			<div id="reloj" className="card mb-3 mx-1 " style = {{maxWidth: "3rem"}}>
        		<div className="card-body">
         			<h5 className="card-title mt-2">{props.second}</h5>
         		</div>
        	</div>
		</div>
	);
};

export default Card;