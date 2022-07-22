import React from 'react'
import RowItemCategory from './rowItemCategory'
import RowItemProduct from './rowItemProduct'


export default class ProductsTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            //FILTER IF filterText in json Name Object
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <RowItemCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <RowItemProduct
                    product={product}
                    key={product.name}
                    onDelete={this.handleDelete}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table className="table" style={{ border: "1px solid green" }}>
                <thead>
                    <tr className="table-dark" >
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

    handleDelete = (pName) => this.props.onDelete(pName)
}