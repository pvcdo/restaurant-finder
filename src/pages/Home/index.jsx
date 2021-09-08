import React, {useState} from "react";
import TextField, {Input} from "@material/react-text-field";
import logo from '../../assets/logo.svg';
import {Container, Search} from './styles';

const Home = () => {
    const[inputValue, setInputValue] = useState('')
    return(
        <Container>
            <Search>
                <img src={logo} alt="Logo do restaurante"/>
                <TextField outlined label="pesquisar">
                    <Input 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </TextField>
            </Search>
        </Container>
    )
}

//const Home = () => <Container>Hello world</Container>

export default Home;
