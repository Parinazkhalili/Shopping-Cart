

import { useProducts } from "../context/ProductContext" ;
import Styles from "./ProductsPage.module.css"

function ProductsPage() {

  const products = useProducts();
  console.log(products) ;
  return (
   <div className={StyleSheet.container}>
    <div className={Styles.products}>

      {!products.length && <p>Loading...</p>}
      {products.map ((p) => (<p key={p.id}>{p.title}</p>))}
    </div>
    <div>sidebar</div>
   </div>
  )
}

export default ProductsPage
