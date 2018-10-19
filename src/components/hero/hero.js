import React from 'react';
import { Hero, Container, Header, Row, Column } from '@front10/landing-page-book/dist/components'

import havana from '../../resources/havana.svg'

import mobiles from '../../data/mobiles.json';
import SearchBox from '../searchBox/searchBox';

const HeroComponent = () => (
    <Hero
        image={havana}
        parallaxOffset={0}
        particles={false}
        isFixed={false}
        isCentered={true}
        backgroundColor="#F9F9F9"
        subHeaderPosition="bottom"
        header="Bienvenidos"
        subHeader="Por favor escoja dos o más modelos para comparar"
    >
        <Container>
            <Header type="h1">Bienvenidos</Header>
            <Header type="h3">Por favor escoja dos o más modelos para realizar la comparación</Header>
            <Row>
                <Column className="offset-md-3 col-md-6">
                    <SearchBox products={mobiles} className="searchBox mt-5" />
Testing
                </Column>
            </Row>
        </Container>
    </Hero>
)

export default HeroComponent;
