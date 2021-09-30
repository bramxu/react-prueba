import React, { Fragment } from "react";

const ItemSelected= (props) => {
    return(
        <Fragment>
            <article class="item">  
                <h2>Detail</h2>
                <div class="row">
                    <form>
                        <div class="mb-12">
                            <p class="item__label">
                                Name: 
                                <span class="item__name">
                                    { item.name }
                                </span>
                            </p>
                        </div>
                        <div class="mb-12">
                            <p class="item__label">
                                Description:
                                <span class="item__description">
                                    { item.description }
                                </span>
                            </p>
                        </div>
                        <div class="mb-12">
                            <p class="item__label">
                                Price:
                                <span class="item__price">
                                    { item.price }
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </article>
        </Fragment>
    );
}

export default ItemSelected;