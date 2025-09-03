import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/Products";
import ProductTemplate from "../../Components/Product Template/ProductTemplate";

const ProductPage = () => {
  const { slug } = useParams();
  const product = productsData[slug];

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500 mt-2">Please check the link again.</p>
      </div>
    );
  }

  return (
    <ProductTemplate
      title={product.title}
      description={product.description}
      image={product.image}
    />
  );
};

export default ProductPage;
