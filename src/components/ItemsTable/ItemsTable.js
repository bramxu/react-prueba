import React, { Fragment } from "react";

const ItemsTable = (props) => {
    (props) ?? console.log(props) //no llegan los props
    return(
        <Fragment>
            <table id="tableList" className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    { props.items && props.items.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ItemsTable;