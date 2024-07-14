import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Spin } from "antd";
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import MakePayment from "./Payment"
import axios from 'axios';
import { toast, toastSuccess } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const handleViewDetails = (id)=> {
    // navigate(``)
    console.log('handledetails')
}



const Ecommerce = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  // const navigate = useNavigate();

  
  const handleEdit = async(id) => {
    try {
      const response = await axios.get(`http://localhost:5000/All-Products/${id}`);
      console.log("Response", response.data)
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async(id) => {
    console.log("Product Id : ", id);
    try {
      const response = await axios.delete(`http://localhost:5000/All-Products/${id}`);
      console.log("Deleted Product : ", response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/All-Products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setLoading(false)
      })
  }, [])

  if(loading)
    (
  <div  className='flex items-center content-center '>
    <Spin size='large' />
  </div>
)
  
  return (
    <div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-6 md:p-10 lg:p-16">
      {Product.map((product) => 
      {
       return  (
          <div key={product.id} className="border-2 rounded-lg h-full">
            <div className="-z-50 p-3 w-full content-center h-[250px] md:max-w-[250px] mx-auto">
              <img className='-z-1 h-full w-full' src= {product.ProductImage} alt="" />
            </div>
           <div className='text-cyan-500 hover:text-orange-500 bg-gray-300 p-3 z-50'>
           <div className=''>
              <p>Name: {product.title}</p>
              <p>Category: {product.ProductCategory}</p>
              <p>Price: {product.ProductPrice}</p>
            </div>

           
            <div className="flex items-center gap-4 text-center">
              <button className="bg-slate-800 text-xs py-2 px-5 rounded-lg text-white">
                Add To Cart
              </button>
              <button
                onClick={() => handleViewDetails(product.id)}
                className="bg-slate-800 text-xs py-2 px-5 rounded-lg text-white"
              ><Link to={`/details/${product.id}`}>View details             
              </Link>
              </button>
            </div>
            
              <MakePayment />
              
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => handleEdit(product.id)}
                className="bg-green-800 text-xs py-2 px-5 rounded-lg text-white"
              >
                Edit
              </button>
              <button
                onClick={(id) => handleDelete(product.id)}
                className="bg-red-800 text-xs  py-2 px-5 rounded-lg text-white"
              >
                Delete
              </button>
            </div>

  
           </div>
          </div>
        )
      }
      )}
    </div>
    </div>
  )
}

export default Ecommerce
