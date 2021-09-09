import React, {useState} from "react";
import TextField, {Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import logo from '../../assets/logo.svg';
import {Wrapper, Container, Logo, Search, Map} from './styles';

const Home = () => {
    const[inputValue, setInputValue] = useState('')
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
                </Search>
            </Container>
            <Map/>
        </Wrapper>
    )
}

//const Home = () => <Container>Hello world</Container>

export default Home;
