type Product = {
  name: string;
  category: string;
  price: number;
  stock: number;
};

export const ProductRow = ({ product }: { product: Product }) => {
    const name = product.stock > 0 ? product.name : 
    <span className="text-red-500 font-semibold">{product.name}</span>;
    return (
    <tr>
        <td className="text-left px-2 font-semibold border h-12">{name}</td>
        <td className="text-center font-semibold border h-12">{product.stock}</td>
        <td className="text-center font-semibold border h-12">{product.price}</td>
    </tr>
  );
};
