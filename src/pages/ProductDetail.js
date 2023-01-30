import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Product Details</h1>
      <h3>{params.productId}</h3>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
