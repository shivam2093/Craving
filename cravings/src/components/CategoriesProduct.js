import React from "react";
import OwlCarousel from "react-owl-carousel3";
import Products from "./Products";
import './CategoriesProduct.css'

class CategoriesProduct extends React.Component {
    render() {
        return (
            <OwlCarousel
                nav
                loop
                {...options}
                className="owl-carousel-category owl-theme"
                autoWidth="false"
            >
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="American"

                        image="/img/c-1.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Pizza"

                        image="/img/c-2.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Healthy"

                        image="/img/c-3.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Vegetarian"
                        image="/img/c-4.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Chinese"

                        image="/img/c-5.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Hamburgers"

                        image="/img/c-6.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Dessert"

                        image="/img/c-7.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Chicken"

                        image="/img/c-8.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"

                    />
                </div>
                <div className="item">
                    <Products
                        boxClass="osahan-category-item"
                        title="Indian"

                        image="/img/c-9.png"
                        imageClass="img-fluid"
                        imageAlt="carousel"
                        linkUrl="#"
                    />
                </div>
            </OwlCarousel>
        );
    }
}

const options = {
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        },
        1200: {
            items: 8
        }
    },
    loop: true,
    lazyLoad: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ]
};

export default CategoriesProduct;
