import { colors } from '@material-ui/core'
import React from 'react'
import Item from './Item'
import './Userpage.css'


function Userpage() {

    return (

        <div className="user_home">

            <img src={window.location.origin + '/img/Cravings.png'} alt="html5" className="img_style"></img>

            <h1 id="food_user"> Food </h1> &nbsp;
            <section >


                <div className="user_item">
                    <Item
                        id="1"
                        title="Favourite"
                        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"

                    />

                    <Item
                        id="1"
                        title="Favourite"
                        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"

                    />

                    <Item
                        id="1"
                        title="Favourite"
                        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"


                    />


                    <Item
                        id="1"
                        title="Favourite"
                        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"


                    />
                </div>




            </section>

        </div>
    )
}

export default Userpage
