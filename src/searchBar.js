import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {props: props, filterText: "", isChecked: false, sortValue: "N/A"}
    }

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "10px" }}>

                <input className="form-control" placeholder="search..."
                    type="text"
                    style={{ width: "100%" }}
                    value={this.state.filterText}
                    onChange={this.handleFilterChanged}>
                </input>


                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "100px" }}>
                                <label>Is In Stock:</label>
                                <input style={{ width: "50px", top: "-" }} onChange={this.handleInStockChanged}
                                    type="checkbox"
                                    checked={this.state.isChecked} />
                            </td>
                            <td style={{ width: "100px" }}>
                                <label>Sort By:</label>
                                <select value={this.state.sortValue} onChange={this.handleSortChange}>
                                        <option value="N/A">N/A</option>
                                        <option value="Price">Price</option>
                                        <option value="Name">Name</option>
                                </select>
                            </td>
                            <td style={{ width: "100px" }}>
                                <label>Category:</label>
                                <select value={this.state.sortValue} onChange={this.handleCategoryChange}>
                                        <option value="N/A">N/A</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Sporting Goods">Sporting Goods</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }

    handleSortChange = (e) => {
        this.setState({sortValue: e.target.value})
        switch(e.target.value){
            case "N/A":
                this.state.props.onUnSorted(this.state.sortValue);
                break
            case "Price":
                this.state.props.onSortByPrice(this.state.sortValue);
                break
            case "Name":
                this.state.props.onSortByName(this.state.sortValue);
                break
            default:
                break
        }
    }

    handleCategoryChange = (e) => {
        this.setState({categoryValue: e.target.value})
        if(e.target.value !== "N/A")
            this.state.props.onCategoryChange(e.target.value)
    }

    handleFilterChanged = (e) => {
        let filterValue = e.target.value;
        this.setState({filterText: filterValue})
        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.state.props.onFilterChanged(filterValue);

    }

    handleInStockChanged = (e) => {
        let isChecked = e.target.checked;
        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.setState({isChecked: isChecked})
        this.state.props.onInStockChanged(isChecked);
    }

}