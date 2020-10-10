import { red } from '@material-ui/core/colors'
import { contains } from 'jquery'
import React, { Component } from 'react'

export class Footer extends Component {

    bgColors = {
        "Default": "#81b71a",
        "Blue": "#00B1E1",
        "Cyan": "#37BC9B",
        "Green": "#8CC152",
        "Red": "#E9573F",
        "Yellow": "#F6BB42",
    };

    render() {
        return (
            <div className='row' style={{ backgroundColor: "beige" }}>



                <div className="imgwithwrite">
                    <div className="header">
                        <h3 style={{ marginLeft: 80, marginTop: 20, padding: 20 }}> Why we should go to Restaurants?</h3>
                        <p style={{ marginLeft: 80, marginTop: 30, padding: 20 }} > because all restaurants are Awesome!!</p>
                    </div>
                    <div className="image">
                        <img alt="" src="https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/cities-bottom@2x.b0736f589e1b720c66bd260a887e6c7c8eb67ad778f98323f1decfb54d6cd18f35b087225a5b1572883df1fc7f1744ba0f38211090d710ddda119230158d7fd6.png&amp;quality=85&amp;w=0&amp;h=0&amp;mode=auto&amp;format=webp&amp;v=4" class="css-1hyfx7x e1qfcze94" style={{ width: 500, padding: 10, marginLeft: 570 }}></img>
                    </div>
                </div>

            </div >
        )
    }
}

export default Footer
