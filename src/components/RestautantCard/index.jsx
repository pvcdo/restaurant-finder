import Skeleton from '../Skeleton';
import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({restaurant, onClick}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return(
        <Restaurant onClick={onClick}>
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
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                onLoad={() => setImageLoaded(true)}
                alt="Foto do restaurante" 
            />
            {!imageLoaded && <Skeleton width='100px' height='100px' />}
        </Restaurant>
    )
};

export default RestaurantCard;