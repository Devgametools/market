'use client'

import { useState } from "react";
import { ProductsTable } from "@/components/ProductsTable";
import { SearchBar } from "@/components/SearchBar";
import products from '@/db/products/products.json';

export default function Home() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-300">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductsTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </main>
    </div>
  );
}
