interface CategoryProps {
    category: string;
}

export const Category = ({ category }: CategoryProps) => {
    return (
        <tr className="">
            <th colSpan={3} className="text-center p-2 font-bold bg-amber-100">{category}</th>
        </tr>
    );
};
