import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckoutPage from "./Pages/CheckoutPage"
import PageNoteFound from "./Pages/404"
import ProductsProvider from "./context/ProductContext"
import CartProvider from "./context/CartContext"
import Layout from "./layout/Layout"

function App() {


  return (
 
  <CartProvider>
  < ProductsProvider>
  <Layout>
  <Routes>
    <Route  path="/"  element={<Navigate to="/products"  replace/>}/>
    <Route  path="/products"  element={<ProductsPage />}/>
    <Route  path="/products/:id"  element={<DetailsPage />}/>
    <Route  path="/checkout"  element={<CheckoutPage />}/>
    <Route  path="/*"  element={<PageNoteFound/>}/>
  </Routes>
  </Layout>
  </ProductsProvider>
  </CartProvider>
 
  )
}

export default App
