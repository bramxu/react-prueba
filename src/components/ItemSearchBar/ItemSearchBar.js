import React, { Fragment, useRef } from "react";
import { Button } from 'react-bootstrap';


const ItemSearchBar = (props) => {
    const searchRef = useRef()
    const items = props.items

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        const seachText = searchRef.current.value
        if (seachText.trim() === "") {
            props.handleSearchItems(items, true);
        } else {
            const itemsSearched = items.filter( (item) => 
                                                    (item.name.toUpperCase().indexOf(seachText.toUpperCase()) >= 0) || 
                                                    (item.description.toUpperCase().indexOf(seachText.toUpperCase()) >= 0) || 
                                                    (item.price.toUpperCase().indexOf(seachText.toUpperCase()) >= 0))
            props.handleSearchItems(itemsSearched, false);
        }

    }
    return(
        <Fragment>
            <div className="row search">
                <div className="col-md-10 mt-3">
                    <input  type="text" 
                            id='search__input' 
                            ref={searchRef} 
                            className="form-control" 
                            placeholder="--search by name--" 
                            onKeyDown={handleKeyDown} />
                </div>
                <div className="col-md-2 mt-3">
                    <Button variant="primary" 
                            className="w-100 search__button" 
                            onClick={search}>Search</Button>{' '}
                </div>
            </div>
        </Fragment>
    )
}

export default ItemSearchBar;