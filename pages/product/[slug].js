import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

function productDetail() {
    return (
        <div classname="w-full md:py-20 ">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 my-[30px] gap-[50px] lg:gap-[100px]">
                    {/* Left Column Start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailCarousel />
                    </div>
                    {/* Left Column End */}
                    {/* Right Column Start */}
                    <div className="flex-[1] py-3">
                        {/* Product Title */}
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro G G
                        </div>
                        {/* Product Subtitle */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>
                        {/* Product Price */}
                        <div className="text-lg font-semibold">MRP: $190.00</div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div>{`(Also includes all Applicable Duties)`}</div>

                        {/* Product Size Range Start */}
                        <div className="my-10">
                            {/* Heading Start */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">Select Size</div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* Heading End */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 7.7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 8
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 8.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 9
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 9.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] cursor-not-allowed opacity-50">
                                    UK 10
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] cursor-not-allowed opacity-50">
                                    UK 11
                                </div>
                            </div>
                            <div className="text-red-600 mt-1">
                                Size Selection is Required
                            </div>
                            {/* Product Size Range End */}
                        </div>
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        <div>
                            <div className="text-lg font-bold mb-5">Product Details</div>
                            <div className="markdown text-md mb-5">
                                Step into your day with these sturdy slip-ons. Featuring an
                                active, lightweight IMEVA midsole and rubber pods on the outsole
                                for maximum grip and durability, this shoe is perfect for
                                tackling your day-to-day tasks with a spring in your step. The
                                sleek design features a SOFTFOAM+ insert as its secret weapon.
                            </div>
                        </div>
                    </div>
                    {/* Right Column End */}
                </div>
                <RelatedProductsCarousel />
            </Wrapper>
        </div>
    );
}

export default productDetail;
