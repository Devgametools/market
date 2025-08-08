type SearchBarProps = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (text: string) => void;
    onInStockOnlyChange: (checked: boolean) => void;
};

export const SearchBar = ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}: SearchBarProps) => {
    return (
        <form className="flex flex-col gap-4 border border-solid w-96 border-gray-300 p-4 rounded-lg bg-gray-200">
            <input
                className="p-2 border border-gray-300 rounded bg-amber-50"
                type="text"
                placeholder="Search products..."
                value={filterText}
                onChange={e => onFilterTextChange(e.target.value)}
            />
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={e => onInStockOnlyChange(e.target.checked)}
                />
                Only show products in stock
            </label>
        </form>
    );
};
