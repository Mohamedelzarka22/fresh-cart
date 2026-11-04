import HomeCard from "@/app/_components/HomeCard/HomeCard";
import { getAllProducts, getProductsBySubCategory } from "@/apis/product";
import { Product } from "@/types/product.t";
import Link from "next/link";
import { FaShoppingCart, FaHome } from "react-icons/fa";
type Props = {
    searchParams: Promise<{ subcategory?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
    const { subcategory } = await searchParams;

    const data: Product[] = subcategory
        ? await getProductsBySubCategory(subcategory)
        : await getAllProducts();

    return (
        <div className="w-full md:w-[90%] mx-auto my-7 px-5">
            {data?.length ? (
                <div className="grid grid-cols-12 gap-4">
                    {data.map((product) => (
                        <HomeCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
               <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4">

        <div className="relative mb-8">
            <div className="w-36 h-36 rounded-full bg-blue-50 flex items-center justify-center">
                <FaShoppingCart className="text-7xl text-blue-500" />
            </div>

            <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full"></span>
            <span className="absolute bottom-2 -left-4 w-5 h-5 bg-blue-200 rounded-full"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            No Products Found!
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-md mb-8 leading-8">
            Sorry, there are currently no products available in this category.
            Try exploring other categories to discover our amazing products.
        </p>

        <Link
            href="/"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
        >
            <FaHome className="text-lg" />
            Back to Home
        </Link>

    </div>
            )}
        </div>
    );
}