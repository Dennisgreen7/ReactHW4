import React, { Component } from 'react'
import "./bootstrap.min.css"
import ProductsTable from './productsTable'
import SearchBar from './searchBar'


let productsData = [
    { category: "Sporting Goods", price: 49.99, stocked: true, name: "Football" },
    { category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball" },
    { category: "Electronics", price: 99.99, stocked: true, name: "IPod Touch" },
    { category: "Electronics", price: 399.99, stocked: false, name: "IPhone 5" },
    { category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7" }
];



export default class FilteredProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: productsData,
            sortValue: "N/A",
            categoryValue: "N/A"
        }
    }

    render() {
        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    sortValue={this.state.sortValue}
                    onUnSorted={this.unSorted}
                    onSortByPrice={this.sortByPrice}
                    onSortByName={this.sortByName}
                    onCategoryChange={this.categoryChange}
                ></SearchBar>
                <ProductsTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} 
                    sortValue={this.state.sortValue}
                    onDelete={this.handleDelete} />
            </div>
        )
    }

    //Callback From SearchBar
    filterChanged = (filterTextInput) => {
        this.setState({ filterText: filterTextInput });
        
    }

    //Callback From SearchBar
    inStockChanged = (inStockInput) => this.setState({ inStockOnly: inStockInput })

    unSorted = (sortValue) => this.setState({products: productsData, sortValue: sortValue})

    sortByPrice = (sortValue) => this.setState({products: [...this.state.products].sort((a,b) =>{ return a.price > b.price ? 1:-1 }), sortValue: sortValue})

    sortByName = (sortValue) => this.setState({products: [...this.state.products].sort((a,b) =>{ return a.name > b.name ? 1:-1 }), sortValue: sortValue})

    categoryChange = (categoryValue) => this.setState({products: [...productsData].filter((p) => categoryValue === p.category), categoryValue: categoryValue})

    handleDelete = (pName) => this.setState({products: [...this.state.products].filter((p) => pName !== p.name)})
}