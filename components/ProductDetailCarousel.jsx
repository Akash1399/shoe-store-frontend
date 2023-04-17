import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img alt="productImage" src="/p1.png" />
                <img alt="productImage" src="/p2.png" />
                <img alt="productImage" src="/p3.png" />
                <img alt="productImage" src="/p4.png" />
                <img alt="productImage" src="/p5.png" />
                <img alt="productImage" src="/p6.png" />
                <img alt="productImage" src="/p7.png" />
            </Carousel>
        </div>
    );
};

export default ProductDetailCarousel;
