import React from 'react'
import FilterProduct from './FilterProduct'

const FilterList = (props) => {
    {/*
    props.nearByRestaurant.map((images) => {


        console.log(images.hasOwnProperty('thumb'));
        if (images.hasOwnProperty('thumb') === false) {

            images.thumb = <div>0000</div>
        }

    })

*/}

    const callPhone = () => {



    }




    return (
        <div className="searchallresults">


            {
                props.nearByRestaurant.map((item) => (

                    <FilterProduct key={item.restaurant_id} item={item}></FilterProduct>
                ))

            }

        </div>
    )
}

export default FilterList
