import React, { useState } from "react";
import Item from "./Item/Item"
import ItemAdd from "./ItemAdd/ItemAdd"
import ItemsTable from "./ItemsTable/ItemsTable"

const ItemsPanel = () => {
    const [items, setItem] = useState();

    const handleSetItem = (item) => {
        console.log('se activa?')
        setItem((prevItems) => {
            return [...prevItems, new Item(item.name, item.description, item.price)]
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ItemAdd items={items} onSubmit={handleSetItem}/>
                </div>
                <div className="col-md-8">
                    <div className="row">SEARCH</div>
                        <div className="col-md-12">
                            <ItemsTable items={items} />
                        </div>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )
} 

export default ItemsPanel;