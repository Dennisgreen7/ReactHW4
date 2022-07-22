import React from 'react'

export default class RowItemCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {props: props}

    }

    render() {
        const category = this.state.props.category;
        return (
            <tr >
                <th colSpan="2" style={{ backgroundColor: "#D0D0D0", textDecoration: "underline" }}>
                    {category}
                </th>
            </tr>
        );
    }
}