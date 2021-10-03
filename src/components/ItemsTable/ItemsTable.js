import React, { Fragment } from "react";
import ItemsTableRow from "../ItemsTableRow/ItemsTableRow"


const ItemsTable = (props) => {
    const items = props.items

    const handleItemSelected = (item) => {
        props.handleItemSelected(item)
    }
    const handleDeleteItem = (id) => {
        props.handleDeleteItem(id)
    }
    const handleUpdateItem = (item) => {
        props.handleUpdateItem(item)
    }

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
                    { items && items.map((item, index) => (
                        <ItemsTableRow 
                            key={index} 
                            item={item} 
                            handleItemSelected={handleItemSelected}
                            handleDeleteItem={handleDeleteItem}
                            handleUpdateItem={handleUpdateItem}
                        />
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ItemsTable;