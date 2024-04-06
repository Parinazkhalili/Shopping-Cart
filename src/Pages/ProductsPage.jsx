

import Card from "../components/Card";
import { useProducts } from "../context/ProductContext" ;
import Styles from "./ProductsPage.module.css"

function ProductsPage() {

  const products = useProducts();

  return (
   <div className={Styles.container}>
    <div className={Styles.products}>

      {!products.length && <p>Loading...</p>}
      {products.map ((p) =>( <Card  key={p.id} data={p} />))}
    </div>

    <div>sidebar</div>
   </div>
  )
}

export default ProductsPage
