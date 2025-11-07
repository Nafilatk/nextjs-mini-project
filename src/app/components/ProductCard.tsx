"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#F8F7F3] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between">
      <div>
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-semibold text-[#2D2920] truncate">
            {product.title}
          </h3>

          <p className="text-[#79804D] text-sm mt-1">{product.category}</p>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-[#3E482A] font-bold text-lg">
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>

      {/* 🌿 View Details Button */}
      <div className="p-4 pt-0">
        <Link
          href={`/products/${product.id}`}
          className="block text-center bg-[#69573B] text-white py-2 rounded-lg hover:bg-[#3E482A] transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
