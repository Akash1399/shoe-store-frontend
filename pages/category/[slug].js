import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/Api";
import useSWR from "swr";
import { useRouter } from "next/router";
const maxResultCount = 3;

function category({ products, category, slug }) {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter()
    useEffect(() => {
        setPageIndex(1)
    }, [query])
    const { data, error, isLoading } = useSWR(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResultCount}`,
        fetchDataFromApi,
        {
            fallbackData: products,
        }
    );
    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.data?.[0]?.attributes?.name}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* PAGINATION BUTTONS START */}
                {data?.meta?.pagination?.total > maxResultCount && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${data && data?.meta?.pagination?.pageCount
                            }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === (data && data?.meta?.pagination?.pageCount)}
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
            </Wrapper>
        </div>
    );
}

export default category;

export async function getStaticPaths() {
    try {
        const category = await fetchDataFromApi("/api/categories?populate=*");
        console.log(category)
        const paths = category?.data?.map((c) => {
            params: {
                slug: c?.attributes?.slug;
            }
        });
        return {
            paths,
            fallback: false,
        };
    } catch (err) { console.log(err) }
}

export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromApi(
        `/api/categories?filter[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResultCount}`
    );
    return { props: { products, category, slug } };
}
