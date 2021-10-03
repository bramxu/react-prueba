import React, { Fragment, useState, useEffect } from "react";
import ItemAdd from "./ItemAdd/ItemAdd"
import ItemsTable from "./ItemsTable/ItemsTable"
import ItemSelected from "./ItemSelected/ItemSelected"
import ItemSearchBar from "./ItemSearchBar/ItemSearchBar"
import {default as UUID} from "node-uuid";

const KEY = "ItemsPanel.list";

const ItemsPanel = () => {
    const [items, setItems] = useState([]);
    const [itemSelected, setItemSelected] = useState(null)
    const [itemPreSearched, setPreSearchedItems] = useState(null)


    const handleSetItem = (item) => {
        setItems((prevItems) => {
            return [...prevItems, { id: UUID.v4(), name:item.name, description:item.description, price:item.price }]
        })
    }
    
    const handleItemSelected = (item) => {
        setItemSelected(item)
    }
    
    const handleDeleteItem = (id) => {
        if (itemSelected && itemSelected.id === id)
            setItemSelected(null)

        setItems(items.filter(item => item.id !== id))
    }

    const handleUpdateItem = (itemToUpdate) => {
        let updateItems = [...items]
        let index = updateItems.findIndex((item => item.id === itemToUpdate.id))
        updateItems[index] = itemToUpdate
        
        setItems(updateItems)

        if (itemSelected && itemSelected.id === itemToUpdate.id)
            setItemSelected(itemSelected)
    }

    const handleSearchItems = (itemsSearched, shouldRestoreItems) => {
        if(shouldRestoreItems){
            setItems(itemPreSearched)
        } else {
            setPreSearchedItems(items)
            setItems(itemsSearched)
        }
    }   

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <ItemAdd 
                            items={items} 
                            handleSetItem={handleSetItem}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 w-100">
                                    <ItemSearchBar items={items} handleSearchItems={handleSearchItems} />
                                </div>
                                <div className="col-md-12 w-100">
                                    <ItemsTable 
                                        items={items} 
                                        handleItemSelected={handleItemSelected} 
                                        handleDeleteItem={handleDeleteItem}
                                        handleUpdateItem={handleUpdateItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <ItemSelected item={itemSelected} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
} 

export default ItemsPanel;