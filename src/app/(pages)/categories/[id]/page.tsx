import { getAllSubCategories } from "@/apis/categories/subCategories.ts/subCategories";
import { Category } from "@/types/category.t";
import { Folder } from "lucide-react";
import Link from "next/link";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function SubCategoriesPage({ params }: Props) {
    const { id } = await params;

    const data = await getAllSubCategories();

    console.log("Category ID:", id);
    console.log("All SubCategories:", data);

    return (
        <div className="w-full md:w-[80%] mx-auto my-7 px-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data?.map((subCategory: Category) => (
                    <Link
                        href={`/products?subcategory=${subCategory._id}`} key={subCategory._id}
                        className="min-h-[200px] rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-green-50">
                            <Folder className="h-5 w-5 text-green-600" />
                        </div>

                        <h2 className="text-xl font-semibold leading-6 text-gray-900">
                            {subCategory.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}