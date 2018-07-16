import React from 'react';
import {Card, Button, CardTitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardComponents.css'

const CardsHomePage = (props) => {
	return(
		<div>
			<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="Card1Style">
				<CardTitle>Sobre o Code Club</CardTitle>
				<CardText>É uma rede formada por voluntários que conduzem clubes de programação gratuitos para crianças de 9 a 13 anos.</CardText>
				<Button href="https://www.codeclubbrasil.org.br/sobre-o-projeto/">Saiba mais sobre Code Club</Button>
			</Card>
			<Card body inverse color="danger" className="Card2Style">
				<CardTitle>Sobre o Code Club Maceió</CardTitle>
				<CardText>Em Maceió, o CodeClub teve início em abril de 2018, ocorrendo 1 dia semanalmente, e possui 24 crianças inscritas.</CardText>
				<Button href="https://codeclubmaceio.blogspot.com/">Mais informações</Button>
			</Card>
			<Card body inverse color="info" className="Card3Style">
				<CardTitle>Scratch</CardTitle>
				<CardText> O Code Club Maceió enfoca, até então, na linguagem Scratch para desenvolvimento de jogos, cujo módulo possui duração de 3 meses.</CardText>
				<Button href="https://scratch.mit.edu/about">Saiba mais sobre Scratch</Button>
			</Card>
			<Card body inverse color="warning" className="Card4Style">
				<CardTitle>Relevância</CardTitle>
				<CardText> O Code Club Maceió contribui para inserir as crianças no meio digital, além de estimular a diversão e a critividade através da programação.</CardText>
				<Button href="https://www.codeclubbrasil.org.br/voluntariado/">Seja um voluntário!</Button>
			</Card>
		</div>
	);
}

export default CardsHomePage;