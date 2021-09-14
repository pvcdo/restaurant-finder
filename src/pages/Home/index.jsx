import React, {useState} from "react";
import { useSelector } from "react-redux";

import TextField, {Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
//import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import fotoRestaurante from '../../assets/restaurante-fake.png';

import {Wrapper, Container, Logo, Search, CarouselTitle, Carousel, ModalTitle, ModalContent /*Map*/} from './styles';
import {Card, RestaurantCard, Modal, Map} from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false)
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null)
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
    };

    function handleOpenModal(placeId){
        setPlaceId(placeId)
        setModalOpened(true)
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue)
        }
    }

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante"/>
                    <TextField 
                        outlined 
                        label="Pesquisar restaurante"
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (
                            <Card 
                                key={restaurant.place_id}
                                photo={restaurant.photos ? restaurant.photos[0].getUrl() : fotoRestaurante} 
                                title={restaurant.name}
                            />
                        ))}
                    </Carousel>
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.place_id} 
                        restaurant={restaurant} 
                        onClick={() => handleOpenModal(restaurant.place_id)}
                    />
                ))}            
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal 
                open={modalOpened} 
                onClose={() => setModalOpened(!modalOpened)}
            >
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora!!!' : 'Fechado agora...'}</ModalContent>
            </Modal>
        </Wrapper>
    )
}

export default Home;
