import { ProductRow } from '../ProductRow';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
}

interface ProductsTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export const ProductsTable = ({products, filterText, inStockOnly}: ProductsTableProps) => {
    // Filtrar productos según criterios
    const filteredProducts = products.filter((product) => {
        const matchesText = product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
        const matchesStock = !inStockOnly || product.stock > 0;
        return matchesText && matchesStock;
    });

    // Agrupar productos por categoría
    const productsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    // Obtener categorías únicas
    const categories = Object.keys(productsByCategory);

    return (
        <div className="w-96 h-full space-y-6">
            {categories.map((category) => (
                <div key={category} className="bg-gray-200 rounded-lg shadow-md overflow-hidden border">
                    {/* Título de la categoría */}
                    <div className="bg-amber-100 px-4 py-3 border-b text-center">
                        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                    </div>
                    
                    {/* Tabla de productos de la categoría */}
                    <table className='w-full'>
                        <thead className='bg-blue-200'>
                            <tr>
                                <th className='p-2 text-center bg-black text-white border'>Name</th>
                                <th className='p-2 text-center bg-black text-white border'>Stock</th>
                                <th className='p-2 text-center bg-black text-white border'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                            {productsByCategory[category].map((product) => (
                                <ProductRow key={product.id} product={product} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
            
            {/* Mensaje cuando no hay productos */}
            {categories.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No se encontraron productos que coincidan con los criterios de búsqueda.
                </div>
            )}
        </div>
    );
};
