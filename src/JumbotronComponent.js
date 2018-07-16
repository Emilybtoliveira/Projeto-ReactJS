import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JumbotronComponent.css';

const SaudaçaoJumbotron = (props) =>{
	return(
		<div>
			<Jumbotron className="Jumbotron1Style">
				<h1>Code Club Maceió</h1>
				<hr/>
				<p> Um projeto de programação para crianças</p>
			</Jumbotron>
		</div>
	);
};

export default SaudaçaoJumbotron;