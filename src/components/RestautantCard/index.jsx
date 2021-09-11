import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars 
                count={5}
                isHalf //permite que seja exibido uma estrela não completamente cheia
                activeColor='#e7711c'
                edit={false} //pois só queremos ver a visualização, não deixar que o número de estrelas seja editado
                value={4} //inicialmente vamos manter esse valor, pois ainda não estamos integrando
            />
            <Address>Rua Nair Paru, 34157</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </Restaurant>
);

export default RestaurantCard;