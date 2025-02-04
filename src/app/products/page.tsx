import Link from "next/link";
import React from "react";

const ProductsList = () => {
  const productId = 100;
  return (
    <>
      <h1>ProductsList</h1>
      <Link href="/">Home</Link>
      <Link href="/products/1">Product 1</Link>
      <h2>Product 2</h2>
      <Link href={`/products/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </>
  );
};

export default ProductsList;
