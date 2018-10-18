import React from 'react'
import PropTypes from 'prop-types';

import _ from 'lodash';
// import faker from 'faker';
import { Search, Grid, Segment, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


// const source = _.times(5, () => ({
//     title: faker.company.companyName(),
//     description: faker.company.catchPhrase(),
//     image: faker.internet.avatar(),
//     price: faker.finance.amount(0, 100, 2, '$'),
// }))


export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false, value: "", results: [] }
    }

    componentDidMount() {
        const { products } = this.props;
        const items = [];
        products.map((item) => {
            let temp = { title: item.model, description: item.brand };
            items.push(temp);
        });
        this.setState({ products: items });
    }

    resetComponent = () => {
        this.setState({ isLoading: false, results: [], value: '' })
    }

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title })
    }

    handleSearchChange = (e, { value }) => {
        const { products } = this.state;
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(products, isMatch),
            })
        }, 1000)

    }

    render() {
        const { isLoading, value, results } = this.state;
        return (
            <div>
                <label>Componente de búsqueda</label> <br />
                <Grid>
                    <Grid.Column width={16}>
                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                            results={results}
                            value={value}
                            size="massive"
                            {...this.props}
                        />
                    </Grid.Column>
                    {/* <Grid.Column width={10}>
                        <Segment>
                            <Header>Value</Header>
                            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state.value, null, 2)}</pre>
                            <Header>Options</Header>
                            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state.products, null, 2)}</pre>
                        </Segment>
                    </Grid.Column> */}
                </Grid>
            </div>
        );
    }
}
SearchBox.propTypes = {
    products: PropTypes.array.isRequired,
};
SearchBox.defaultProps = {
}