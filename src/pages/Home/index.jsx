import React, {useState} from "react";

import TextField, {Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";

import logo from '../../assets/logo.svg';
import fotoRestaurante from '../../assets/restaurante-fake.png';

import {Wrapper, Container, Logo, Search, CarouselTitle, Carousel, Map} from './styles';
import {Card} from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true
    };
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
                        />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={fotoRestaurante}/>
                        <Card photo={fotoRestaurante}/>
                        <Card photo={fotoRestaurante}/>
                        <Card photo={fotoRestaurante}/>
                        <Card photo={fotoRestaurante}/>
                        <Card photo={fotoRestaurante}/>
                    </Carousel>
                </Search>
                
            </Container>
            <Map/>
        </Wrapper>
    )
}

export default Home;
