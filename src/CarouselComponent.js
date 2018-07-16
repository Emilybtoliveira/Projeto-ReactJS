import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import './CarouselComponent.css';
import imagem1 from './imagem1.svg';

const items = [
	{
		src:"https://i.pinimg.com/originals/6f/0a/9c/6f0a9c0321e9459870034ae257d46af8.jpg",
		altText:'Code Club Maceió',
		caption:'Aulas do Code Club',
		header:'Code Club Maceió'
	},
	{
		src:"https://i.pinimg.com/originals/07/ba/2e/07ba2e1df96a6072c777bd6fae10f965.jpg",
		altText:'Code Club Maceió',
		caption:'Aulas do Code Club',
		header:'Code Club Maceió'
	},
	{
		src:"https://i.pinimg.com/originals/f7/dd/81/f7dd8188d89dfb1d8ac8308e1060efaa.jpg",
		altText:'Code Club Maceió',
		caption:'Aulas do Code Club',
		header:'Code Club Maceió'
	}
]

const CarouselHomePage = () => <UncontrolledCarousel className='CarouselStyle' items={items}/>;

export default CarouselHomePage;