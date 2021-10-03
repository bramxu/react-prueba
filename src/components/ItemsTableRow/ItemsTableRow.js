import React, { Fragment, useState, useRef } from "react";
import { Button } from 'react-bootstrap';

const ItemsTableRow = (props) => {
    const item = props.item;
    
    const nameRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()

    const [isEditing, toggleEdit] = useState(false)

    const setItemSelected = () => {
        props.handleItemSelected(item)
    }
    
    const deleteItem = () => {
        props.handleDeleteItem(item.id)
    }
    
    const handleToggleEdit = () => {
        toggleEdit(!isEditing)
    }

    const updateItem = () => {
        const name = nameRef.current.value
        const description = descriptionRef.current.value
        const price = priceRef.current.value

        let itemToUpdate = {id: item.id, name: name, description: description, price: price}
        props.handleUpdateItem(itemToUpdate)
        handleToggleEdit()
    }

    return(
        <Fragment>
            {isEditing ? 
                <tr className="item__table__row">
                    <td className="item__table__col">
                        <input type="text" defaultValue={item.name} ref={nameRef} className="item__table__input" />
                    </td>
                    <td  className="item__table__col">
                        <input type="text" defaultValue={item.description} ref={descriptionRef} className="item__table__input" />
                    </td>
                    <td className="item__table__col">
                        <input type="number" defaultValue={item.price} ref={priceRef} className="item__table__input" />
                    </td>
                    <td  className="item__table__col"> 
                        <Button variant="secondary" 
                                className="w-100" 
                                onClick={handleToggleEdit}>Cancelar</Button>{' '}
                    </td>
                    <td className="item__table__col">
                        <Button variant="primary" 
                                className="w-100" 
                                onClick={updateItem}>Guardar</Button>{' '}
                    </td>
                </tr>
            :
                <tr>
                    <td>
                        <button className="item--selected" onClick={setItemSelected}> 
                            {item.name}
                        </button>
                    </td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td> 
                        <Button variant="secondary" 
                                className="w-100" 
                                onClick={handleToggleEdit}>Editar</Button>{' '}
                    </td>
                    <td>
                        <Button variant="danger" 
                                className="w-100" 
                                onClick={deleteItem}>Borrar</Button>{' '}
                    </td>
                </tr>
            }
        </Fragment>
    );
}

export default ItemsTableRow;
