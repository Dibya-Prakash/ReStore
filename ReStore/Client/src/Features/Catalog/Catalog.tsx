import { useEffect, useState } from "react";
import {Product} from "../../App/Models/Products";
import ProductList from "./ProductList";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/Layout/LoadingComponent";
// import {ProductList} from "../../Features/Catalog/ProductList"


export default function Catalog(){
const [products,setProducts]= useState<Product[]>([]);
const [loading,setLoading]= useState(true);

    useEffect(()=>{
    agent.Catalog.list().then(products=>setProducts(products))
    .catch(error=> console.log(error))
    .finally(()=>setLoading(false))
    },[])

    if(loading) return <LoadingComponent message="Loading Products..."/>
    return(
    <>
       <ProductList products={products} />
      </>
    )
}
