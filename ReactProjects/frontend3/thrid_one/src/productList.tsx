import { useState, useEffect } from "react";

interface product {
    name: string,
    id: number,
    category: string,
    price: number
}

interface props {
    products: product[],
    onAddToCart: (p: product) => void
}

const ProductList = ({ products, onAddToCart }: props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        let filtered = products;

        if (selectedCategory !== "all") {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (searchTerm.trim()) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [products, searchTerm, selectedCategory]);

    return (
        <div className="product-list">
            <h2>Product List</h2>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books</option>
                </select>
            </div>

            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul>
                    {filteredProducts.map(p => (
                        <li key={p.id}>
                            <h4>{p.name}</h4>
                            <p>Price: ${p.price}</p>
                            <button onClick={() => onAddToCart(p)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
