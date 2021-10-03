import React, { Fragment, useRef } from "react";


const ItemAdd = (props) => {

    const nameRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    
    const addItem = () => {
        /** Get Inputs values **/
        const name = nameRef.current.value
        const description = descriptionRef.current.value
        const price = priceRef.current.value

        if (name === "" || description === "" || price === ""  ) return;

        props.handleSetItem({ name: name, description: description, price: price})

        /** Restart values **/
        initFormValues()
    }

    const initFormValues = () => {
        nameRef.current.value = null
        descriptionRef.current.value = null
        priceRef.current.value = null
    }

    return (
        <Fragment>
            <div className="item-add">
                <h2>New Item</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="item-add__name" className="form-label">Name</label>
                        <input ref={nameRef} type="text" className="form-control" id="item-add__name" aria-describedby="txtNewItem" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="item-add__description" className="form-label">Description</label>
                        <input ref={descriptionRef} type="text" className="form-control" id="item-add__description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="item-add__price" className="form-label">Price</label>
                        <input ref={priceRef} type="number" className="form-control" id="item-add__price" /> 
                    </div>
                    <button onClick={addItem} type="button" className="btn btn-primary pull-right" >Save</button>
                </form>
            </div>
        </Fragment>
    );
}

export default ItemAdd;
