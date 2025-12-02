import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header.jsx";
import { ProductsGrid } from "./ProductsGrid.jsx";
import "./HomePage.css";

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid key={products} />
      </div>
    </>
  );
}
