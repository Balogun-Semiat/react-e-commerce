import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Homepage from './Component/Homepage'
import ProductDetails from './Component/ProductDetails'
import MakePayment from './Component/Payment'
import UpdateProduct from './Component/UpdateProduct'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/payment" element={<MakePayment />} />
        <Route path="/update-product" element={<UpdateProduct />} />
      </Routes>
    </div>
  )
}

export default App
