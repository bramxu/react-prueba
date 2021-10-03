import React, { Fragment } from "react";

const ItemSearchBar = () => {
    return(
        <Fragment>
            <div class="row">
                <div class="col-md-10 mt-3">
                    <input type="text" id='txtSearch' class="search form-control" placeholder="--search by name--" />
                </div>
                <div class="col-md-2 mt-3">
                    <button type="button" class="btn btn-primary" onclick="search()">Search</button>
                </div>
            </div>
        </Fragment>
    )
}

export default ItemSearchBar;