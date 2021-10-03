import React from "react"

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            description:  props.description,
            price: props.price, 
            isSelected: false
        };
    }

}

export default Item;