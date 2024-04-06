
import { ImSearch } from "react-icons/im";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext" ;
import Styles from "./ProductsPage.module.css"
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {

  const products = useProducts();
  console.log(products)
  const [displayed , setDisplayed] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {setDisplayed(products)},[products] );
  
  const searchHandler = () => {
    console.log('search')
  }

  const categoryHandler = (event) => {
   const {tagName} = event.target;

   const category = event.target.innerText.toLowerCase();
    if (tagName!== "LI") return ;
    console.log(category)
  }
  return (
    <>

    <div>
      <input type="text"  placeholder="Search..."  value={search} onChange ={ e => setSearch(e.target.value.toLowerCase().trim())}/>
      <button  onClick={searchHandler}><ImSearch /></button>
    </div>
   <div className={Styles.container}>
    <div className={Styles.products}>

      {!displayed.length && <Loader />}
      {displayed.map ((p) =>( <Card  key={p.id} data={p} />))}
    </div>

    <div>
      <div>
      <FaListUl />
      <p>Categories</p>
      </div>
      <ul  onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
      </div>
   </div>
   </>
  )
}

export default ProductsPage
