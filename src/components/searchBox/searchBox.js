import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Row, Column } from '@front10/landing-page-book/dist/components'
export default class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        // this.state = { isLoading: false, value: "", results: [] }
    }

    // componentDidMount() {
    //     const { products } = this.props;
    //     const items = [];
    //     products.map((item) => {
    //         let temp = { title: item.model, description: item.brand };
    //         items.push(temp);
    //     });
    //     this.setState({ products: items });
    // }

    // resetComponent = () => {
    //     this.setState({ isLoading: false, results: [], value: '' })
    // }

    // handleResultSelect = (e, { result }) => {
    //     this.setState({ value: result.title })
    // }

    // handleSearchChange = (e, { value }) => {
    //     const { products } = this.state;
    //     this.setState({ isLoading: true, value })

    //     setTimeout(() => {
    //         if (this.state.value.length < 1) return this.resetComponent()
    //         const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    //         const isMatch = result => re.test(result.title)

    //         this.setState({
    //             isLoading: false,
    //             results: _.filter(products, isMatch),
    //         })
    //     }, 1000)

    // }

    render() {
        // const { isLoading, value, results } = this.state;
        const { className } = this.props;
        return (
            <div className={className}>
                <Row>
                    <Column className="col-10 col-xs-10">
                        <Input
                            name="myInput"
                            placeholder="Escriba un modelo a buscar"
                            // value="This is an input"
                            className="p-4"
                        />
                    </Column>
                    <Column className="col-2 col-xs-2">
                        <Button
                            className="p-3"
                            loading={false}
                        >
                            <i className="fa fa-search " />
                        </Button>
                    </Column>
                </Row>
            </div>
        );
    }
}
SearchBox.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string,
};
SearchBox.defaultProps = {
    className: "searchBox"
}