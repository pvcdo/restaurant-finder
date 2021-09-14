import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({restaurant}) => (
    <Restaurant>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars 
                count={5}
                isHalf //permite que seja exibido uma estrela não completamente cheia
                activeColor='#e7711c'
                edit={false} //pois só queremos ver a visualização, não deixar que o número de estrelas seja editado
                value={4} //inicialmente vamos manter esse valor, pois ainda não estamos integrando
            />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
            alt="Foto do restaurante" 
        />
    </Restaurant>
);

export default RestaurantCard;