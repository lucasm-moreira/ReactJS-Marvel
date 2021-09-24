import React, { useEffect, useState } from 'react';
import '../App.css';
import {
    Container,
    Dropdown,
    Image,
    GridRow,
    Grid,
    GridColumn
} from 'semantic-ui-react';

const Hero = (props) => {
    // Credenciais da API
    const timeStamp = "1583460885";
    const apiKey = "246e196d508fa427176b7bc94ae03637";
    const md5 = "9905624fce162ae6ce4177dda41c0302";    

    const [heroes, setHeroes] = useState([]);
    //const [heroImage, setHeroImage] = useState([]);
    const [singleHero, setSingleHero] = useState({
        name: "",
        image: "",
        description: ""
    });

    useEffect(() => {
        async function fetchHeroes() {
            const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`;

            let res = await fetch(url);
            let jsonParsed = await res.json();
    
            let initialHeroes = jsonParsed.data.results.map(hero => {
                return hero;
              });
    
            setHeroes(initialHeroes);
        }

        fetchHeroes();
    }, []);

    function handleChange(event) {
        for(let i = 0; i <= heroes.length; i++) {
            let nameHero = heroes.map(heroName => {
                return heroName.name;
            });

            if(event.target.innerText === nameHero[i]) {
                return setSingleHero({
                        name: heroes[i].name,
                        image: `${heroes[i].thumbnail.path}.${heroes[i].thumbnail.extension}`,
                        description: heroes[i].description
                    }
                );
            }
        }
    }

    const optionsSelect = heroes.map(hero => {
        return { key: hero.id, value: hero.id, text: hero.name };
    });

    let imageHero;

    if(singleHero.image === "") {
        imageHero = <h1 className="choose-text">Escolha um herói</h1>;
    }
    else {
        imageHero = (
            <Image src={ singleHero.image } centered size="large" />
        );
    }

    return (        
        <div>
            <header>
                <Container>
                    <Grid
                        centered
                        verticalAlign="middle"
                        columns={1}
                        className="header"
                    >
                        <GridRow>
                            <GridColumn>
                                <Dropdown
                                    className="dropdown"
                                    placeholder="Escolha seu herói"
                                    fluid
                                    selection
                                    options={ optionsSelect }
                                    onChange={ handleChange }
                                />
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </header>

            <Container>
                <main>
                    <h1 className="title-hero">{ singleHero.name }</h1>
                    <p className="description-hero">
                        { singleHero.description }
                    </p>
                    <br />
                    { imageHero }
                </main>
            </Container>

            <Container className="text-center">
                <h6>
                    <strong>Atenção:</strong> alguns heróis não possuem imagem e/ou descrição!
                </h6>
            </Container>
        </div>
    );
}

export default Hero;