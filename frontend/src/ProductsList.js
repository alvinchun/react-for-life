import data from "./products.json"
// import React from "react";

const ProductsList = () => {
  // let string1 =JSON.stringify(products);
  // const parsed = JSON.parse(string1);
  const products = data.products;

  console.log(products)
  // const { id, name, price, image } = parsed
  // console.log(name);

  return <div>
    {products.map(product => <div key={product.id}>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <img src={product.image} alt={ "images" }/>
    </div>)}

  </div>

}

export default ProductsList;
