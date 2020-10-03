import React from 'react'


function Item({ id, title, image }) {
    return (
        <div className="item">
            <div className="all_item">
                <p>{title}</p>
            </div>

            <img src={image} alt="" height="300" />

            <button> Add to checkout</button>
        </div>
    )
}

export default Item
