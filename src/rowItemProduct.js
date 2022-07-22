import React from 'react'

export default class RowItemProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {props: props}
    }

    render() {
        const product = this.state.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };

        return (
            <tr className="table-active"  >
                <td style={styleStocked}>
                        {product.name}
                        {!product.stocked && <button onClick={this.handleDelete}>Delete</button>}
                </td>
                <td>{product.price}</td>
            </tr>
        );

    }

    handleDelete = () => this.props.onDelete(this.state.props.product.name)
}