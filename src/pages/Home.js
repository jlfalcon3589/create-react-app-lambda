import React from 'react'
// import mobiles from '../data/mobiles';
// import SearchBox from '../components/searchBox/searchBox'
import Hero from '../components/hero/hero'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Hero />
                <div className="container mt-4">
                    <h1>Contenido</h1>
                </div>
                {/* <SearchBox products={mobiles} /> */}
            </div>
        )
    }
}
