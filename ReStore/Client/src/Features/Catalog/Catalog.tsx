import { useEffect, useState } from "react";
import {Product} from "../../App/Models/Products";
import ProductList from "./ProductList";
// import {ProductList} from "../../Features/Catalog/ProductList"


export default function Catalog(){
const [products,setProducts]= useState<Product[]>([]);

    useEffect(()=>{
      fetch('http://localhost:5295/api/Product')
      .then(response=> response.json())
      .then(data => setProducts(data))
    },[])
    return(
    <>
       <ProductList products={products} />
      </>
    )
}
