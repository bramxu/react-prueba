import React, { Fragment } from "react";

const ItemSelected= (props) => {
    const item = props.item 
    return(
        <Fragment>
            <article className="item">  
                <h2>Detail</h2>
                <div className="row">
                    <form>
                        <div className="mb-12">
                            <p className="item__label">
                                Name: 
                                <span className="item__name">
                                    { item && item.name }
                                </span>
                            </p>
                        </div>
                        <div className="mb-12">
                            <p className="item__label">
                                Description:
                                <span className="item__description">
                                    { item && item.description }
                                </span>
                            </p>
                        </div>
                        <div className="mb-12">
                            <p className="item__label">
                                Price:
                                <span className="item__price">
                                    { item && item.price }
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